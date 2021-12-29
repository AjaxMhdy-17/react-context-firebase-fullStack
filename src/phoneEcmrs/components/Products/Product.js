import React , {useEffect}from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Product.css'
import { UseMainContext } from '../../context/Context';
import { FaCartPlus } from 'react-icons/fa'

const Product = (props) => {

    const product = props.product
    // console.log(product);

    const ctx = UseMainContext();
    // console.log(ctx);


    useEffect(() => {
        ctx.getCurrentUser()
    },[ctx.user])


    return (
        <ProductWrapper className='my-3'>
            <div className="card">
                <div className="overlay"></div>
                <div
                    onClick={() => ctx.getDetail(product.id)}
                    className="img__container p-5">
                    <Link to='/detail'>
                        <img src={product.img} className='card__img__top img-fluid' alt="image" />
                    </Link>
                    <button
                        disabled={product.inCart ? true : false}
                        onClick={() => {
                            ctx.openModal(product.id)
                            ctx.addToCart(product.id)
                        }
                        }
                        className="cart__btn"
                    >
                        {
                            product.inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    in Cart
                                </p>
                            ) : (
                                <FaCartPlus />
                            )
                        }
                    </button>
                </div>
                <div
                    className="product__detail__button"
                >
                    <Link
                        to='/detail'
                        onClick={() => ctx.getDetail(product.id)}
                    >
                        view details 
                    </Link>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {product.title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {product.price}
                    </h5>
                </div>

            </div>
        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 1s linear;
        position : relative ;

        .img__container{
            position : relative ;
            overflow : hidden ;

            .card__img__top{
                transition : all 1s ease-in-out ;
            }

            .cart__btn {
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 0.2rem 0.4rem;
                background: var(--lightBlue);
                border: none;
                color: var(--mainWhite);
                font-size: 1.4rem;
                border-radius: 0.5rem 0 0 0;
                transform: translate(100%, 100%);
                transition: all 1s ease-in-out;

                &:hover{
                    color : var(--mainBlue) ;
                    cursor : pointer ;
                }

              }

           
            &:hover{
                .card__img__top{
                    transform : scale(1.2) 
                }
                .cart__btn{
                    transform : translate(0,0)
                }
            }
        }

        .product__detail__button{
            position: absolute;
            top : 50% ;
            left : 50% ;
            transform: translate(-10% , -10%);
            background-color: burlywood;
            padding : 8px 29px ;
            letter-spacing: 0.4px ;
            display: none;
            transition: all 1s linear;
            cursor: pointer;
            z-index: 10 ;
        }

        &:hover{
            .product__detail__button{
                display : block ;
                transform: translate(-50% , -50%);
            }
        }

        .card-footer {
            background: transparent;
            border-top: transparent;
            transition: all 1s linear;
        }
        &:hover{
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
            .card-footer{
              
                background : crimson ;
                color : #fff ;
                z-index : 4 ;
            }
            .card-footer h5{
                color : #fff ;
            }
        }
    }
`

export default Product
