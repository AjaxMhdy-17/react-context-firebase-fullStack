import React, { useEffect } from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonContainer } from '../UI/ButtonContainer'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { UseMainContext } from '../../context/Context'


const Header = () => {

    const ctx = UseMainContext()

    const totalItem = ctx.getTotalCartItemNumber();

    useEffect(() => {
        ctx.getCurrentUser()
    }, [ctx.user])

    return (
        <div className='container-fluid'>
            <Navbar bg="light" expand="md" bg="dark" variant="dark">
                <Container>
                    <Link className='navbar-brand' to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Link className='nav-link' to="/">Product</Link>
                            {ctx.user === '' ? (
                                <>
                                    <Link
                                    onClick={() => ctx.setSignIn(true)}
                                    className='nav-link' to="/auth">
                                       
                                            Login
                                       
                                    </Link>
                                    <Link
                                        className='nav-link' to="/auth"
                                    >
                                        <span
                                            onClick={() => ctx.setSignIn(false)}
                                        >
                                            Register
                                        </span>

                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link className='nav-link' to="/profile">{ctx.user.displayName !==null ? ctx.user.displayName.toUpperCase() : <span>Profile</span> }</Link>
                                    <Link
                                        className='nav-link'
                                        to="/auth"
                                        onClick={() => ctx.logoutUser()}
                                    >
                                        Logout
                                    </Link>
                                </>
                            )}

                        </Nav>
                        <Nav className="m-auto">
                            <Link className='nav-link' to="/cart" className="cart">
                                <ButtonContainer cart>
                                    <span className="mr-2">
                                        {totalItem > 0 && totalItem}
                                        <i className="fas fa-cart-plus " />
                                    </span>
                                    my cart
                                </ButtonContainer>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}




export default Header
