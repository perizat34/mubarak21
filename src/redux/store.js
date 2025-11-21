import {configureStore} from "@reduxjs/toolkit"
import countReducer from "./slice/countClice"
import productReduser from "./slice/produktClice"
import wishReducer from "./slice/wishSlice"
import cartReducer from "./slice/cartSlice";


const myStore = configureStore({
    reducer:{
        counter: countReducer,
        product: productReduser,
        wishlist: wishReducer,
        carts: cartReducer,
    }
})

export default myStore
