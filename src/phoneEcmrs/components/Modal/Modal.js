import React from 'react'
import styled from 'styled-components';
import { UseMainContext } from '../../context/Context'
import { ButtonContainer } from '../UI/ButtonContainer';
import { Link } from 'react-router-dom';

function Modal() {

    const ctx = UseMainContext();
    // console.log(ctx);
    const product = ctx.modal.modalProduct
    const modalOpen = ctx.modal.modalOpen


    if(!modalOpen){
        return null ;
    }
    else{
        return (
            <ModalContainer>
                <div className="container">
                    <div className="row">
                        <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize'>
                            <h5>item added to cart</h5>
                            <img src={product.img} className='img-fluid' alt='modal-image' />
                            <h5>{product.title}</h5>
                            <h5 className="text-muted">price : ${product.price}</h5>
                            <Link to='/'>
                                <ButtonContainer
                                    onClick={() => ctx.closeModal()}
                                >
                                    Continue shoping 
                                </ButtonContainer>
                            </Link>
                            <Link to='/cart'>
                                <ButtonContainer cart
                                    onClick={() => ctx.closeModal()}
                                >
                                    Go to Cart
                                </ButtonContainer>
                            </Link> 
                        </div>
                    </div>
                </div>          
            </ModalContainer>
        )
    }
}

const ModalContainer = styled.div`
    position : fixed ;
    z-index : 9 ;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display : flex ;
    align-items : center ;
    justify-content : center ;

    #modal{
        background : var(--mainWhite) ;
    }
`


export default Modal
