// import React, { createContext, useState } from 'react'
// import all_products from '../components/Assets/Assets/all_product.js'

// export const ShopContext = createContext(null);

// const getDefaultCart = () =>{
//     let cart = {};
//     for(let index = 0; index <Array.length; index++){
//         cart[index] = 0;
//     }
//     return cart;
// }

// const ShopContextProvider=(props)=>{

// const [cartItems , setCartItems] = useState(getDefaultCart());

// const addToCart = (itemId) => {
//     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   
// }

// const removeFromCart = (itemId) => {
//     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
// }

// const gettotalcartamount=()=>{
//     let totalamount = 0;
//     for (const item in cartItems)
//     {
//         if(cartItems[item]>0)
//         {
//             let itemInfo = all_products.find((product) => product.id===Number(item))
//             totalamount+= itemInfo.new_price * cartItems[item];
//         }
//         return totalamount;
//     }
// }

// const getTotalCartItems = ()=>{
//     let totalItem =0;
//     for(const item in cartItems){
//         if(cartItems[item]>0)
//         {
//             totalItem += cartItems[item];
//         }
//     }
//     return totalItem;
// }

// const contextValues ={getTotalCartItems,gettotalcartamount,all_products , cartItems, addToCart,removeFromCart}

// return(
//     <ShopContext.Provider value={contextValues}>
//         {props.children}
//     </ShopContext.Provider>
// )
// }
 
// export default ShopContextProvider



import React, { createContext, useState } from 'react';
import all_products from '../components/Assets/Assets/all_product.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        cart[all_products[index].id] = 0; // Initialize cart with product IDs
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // Increment quantity or set to 1 if not in cart
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0, // Decrease quantity or set to 0 if less than 1
        }));
    };

    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_products.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalamount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalamount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValues = {
        getTotalCartItems,
        gettotalcartamount,
        all_products,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return <ShopContext.Provider value={contextValues}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
