import { createSlice } from "@reduxjs/toolkit";
import productData from "../../Shop/ShopPage"


const initialState = { 
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0,
 };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
                if(find >= 0){
                    state.cart[find].quantity += 1;
                } else {
                    state.cart.push(action.payload);  
                }           
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    // console.log("cartTotal:", cartTotal);
                    // console.log("cartItem:", cartItem);

                    const { price, quantity } = cartItem;
                    // console.log(price, quantity);

                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal
                },
                {
                    totalPrice: 0, //Initial value 0
                    totalQuantity: 0 //Initial value 0
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2)); // fix price to be 400.00 or 400.99 
            state.totalQuantity = totalQuantity;
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter( (item) => item.id !== action.payload);
        },

        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map( (item) => {
                if (item.id === action.payload) {
                    return {...item, quantity: item.quantity + 1 };
                }

                return item;
            });
        },

        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    if(item.quantity <= 0){ // check if quantity is 0 or -1      
                        // console.log({item});                     
                       return item;
                    }

                    return {...item, quantity: item.quantity - 1 };
                }

                return item;
            });
        },

    },
});


export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;