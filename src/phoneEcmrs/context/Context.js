import React, { useState, createContext, useContext } from 'react';

import { storeProducts, detailProduct } from '../data'
import Firebase from '../Firebase/Firebase';
import { googleProvider } from '../Firebase/Firebase';
import { Database } from '../Firebase/Firebase';


export const CreateMainContext = createContext(storeProducts)



export const MainContextProvider = (props) => {

    // states
    const [mainState, setMainState] = useState({
        products: storeProducts,
        detailsProduct: detailProduct,
    })
    const [modal, setModal] = useState({
        modalOpen: false,
        modalProduct: detailProduct,
    })
    const [cart, setCart] = useState([])
    const [cartCalc, setCartCalc] = useState({
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    })
    const [user, setUser] = useState('')
    const [message, setMessage] = useState('')
   
    const [thanks, setThanks] = useState(false)



    // common functions 
    const getFilterItem = (id) => {
        return mainState.products.filter(item => item.id === id)
    }
    const getFindItem = (id) => {
        return mainState.products.find(item => item.id === id)
    }
    const getDetail = (id) => {
        const findDetailProduct = getFindItem(id)
        const updateMainState = {
            ...mainState,
            detailsProduct: findDetailProduct
        }
        setMainState(updateMainState)
    }
    const findIndexProduct = (id) => {
        const findCartProduct = getFindItem(id)
        const allProducts = mainState.products
        const index = allProducts.indexOf(findCartProduct)
        // console.log(index);
        const product = allProducts[index];
        // console.log(product);
        return product

    }
    const updateMainStateData = (product, inCart, count, total) => {
        product.inCart = inCart;
        product.count = count
        const price = total
        product.total = price
    }


    // modal funcitions
    const openModal = (id) => {
        const findModalProduct = getFindItem(id)
        const updateModal = {
            ...modal,
            modalOpen: true,
            modalProduct: findModalProduct
        }
        setModal(updateModal)
    }
    const closeModal = () => {
        const updateModalState = {
            ...modal,
            modalOpen: false,
        }
        setModal(updateModalState)
    }


    // cart functions 
    const addToCart = (id) => {
        const product = findIndexProduct(id)
        updateMainStateData(product, true, 1, product.price);

        setCart([...cart, product])
    }
    const removeItem = (id) => {
        const product = findIndexProduct(id)
        updateMainStateData(product, false, 0, 0)
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }
    const removeItemFromCart = (id) => {
        removeItem(id)
    }
    const clearCart = () => {
        setCart([])
    }
    const increaseItem = (id) => {
        console.log('inc ' + id);
        const incProduct = findIndexProduct(id)
        console.log(incProduct);
        incProduct.count = incProduct.count + 1
        incProduct.total = incProduct.count * incProduct.price
        setCart([...cart])
        // addTotal()
    }
    const decreaseItem = (id) => {
        console.log('dec ' + id);
        const incProduct = findIndexProduct(id)
        if (incProduct.count === 1) {
            removeItem(incProduct.id)
        }
        else {
            incProduct.count = incProduct.count - 1
            incProduct.total = incProduct.count * incProduct.price
            setCart([...cart])
        }
        // addTotal()
    }
    const getTotals = () => {
        let subTotal = 0
        cart.map(item => {
            subTotal += item.total
        })

        return subTotal
    }
    const getTotalCartItemNumber = () => {
        let count = 0;
        cart.map(item => {
            count += item.count
        })
        return count;
    }

    const addTotal = () => {
        const totals = getTotals();
        console.log(totals);
        const tax = totals * 0.1
        const cartTax = parseFloat(tax.toFixed(2))
        const cartTotalWithTax = totals + cartTax

        const updateCartCalc = {
            ...cartCalc,
            cartSubTotal: totals,
            cartTax: cartTax,
            cartTotal: cartTotalWithTax
        }
        setCartCalc(updateCartCalc)
    }

   

    const loginWithGoogle = () => {
        Firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var user = result.user;
                setUser(user)
            }).catch((error) => {
                // var errorMessage = error.message;
                setMessage(error.message)
            });
    }

    const getCurrentUser = () => {
        Firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    setUser(user)
                } else {
                    setUser('')
                }
            });
    }

    const logoutUser = () => {
        Firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setUser('')
        }).catch((error) => {
            // An error happened.
        });

    }

    const CreateUserWithEmailPassword = (name, email, password) => {
        Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                user.updateProfile({
                    displayName: name
                })
                setUser(user)
            })
            .catch((error) => {
                var errorMessage = error.message;
                setMessage(errorMessage)
            });
    }

    const loginUserWithEmailAndPass = (email , password) => {
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                setUser(user)  
            })
            .catch((error) => {
                var errorMessage = error.message;
                setMessage(errorMessage)
            });

    }

    
    const passwordReset = (email) => {
        Firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                setThanks(true)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const [signIn, setSignIn] = useState(true)


    const postUserOrderDetails = (userDetailAndOrderDetail) => {
        Database.ref('/UsersInfoAndOrdersDetail/'+user.uid).push(userDetailAndOrderDetail)
    }

    const [userOrder , setUserOrder] = useState('')

    const loadDataFromDatabase = () => {
        Database.ref('/UsersInfoAndOrdersDetail/'+user.uid).on('value' , (snapshot) => {

            const data = snapshot.val()
            setUserOrder(data) 
        } )
    }

    // useEffect(() => {
    //     loadDataFromDatabase() ;
    // },[])

    return (
        <CreateMainContext.Provider
            value={{
                mainState: mainState,
                setMainState: setMainState,
                cart: cart,
                addTotal: addTotal,
                getDetail: getDetail,
                addToCart: addToCart,
                increaseItem: increaseItem,
                decreaseItem: decreaseItem,
                removeItemFromCart: removeItemFromCart,
                getTotalCartItemNumber: getTotalCartItemNumber,
                cartCalc: cartCalc,
                clearCart: clearCart,
                modal: modal,
                openModal: openModal,
                closeModal: closeModal,
                user: user,
                message : message , 
                signIn : signIn , 
                setSignIn : setSignIn , 
                loginWithGoogle: loginWithGoogle,
                logoutUser: logoutUser,
                getCurrentUser: getCurrentUser,
                CreateUserWithEmailPassword: CreateUserWithEmailPassword,
                loginUserWithEmailAndPass : loginUserWithEmailAndPass ,
                passwordReset : passwordReset , 
                thanks : thanks , 
                postUserOrderDetails : postUserOrderDetails  , 
                userOrder : userOrder , 
                loadDataFromDatabase : loadDataFromDatabase 
            }}
        >
            {props.children}
        </CreateMainContext.Provider>
    )
}

export const UseMainContext = () => {
    return useContext(CreateMainContext)
}



