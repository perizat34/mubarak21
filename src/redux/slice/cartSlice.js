import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],

    },
    reducers: {
        addCart:(state,action) =>{
            state.cart.push({...action.payload,quantity:1})
        },

        incrementQty:(state,action) => {
            let item = state.cart.find((x) => x.id == action.payload)

            if(item){
                item.quantity += 1
            }

        },
        decrementQty:(state,action) => {
            let item = state.cart.find((x) => x.id == action.payload)

            if(item ){
                item.quantity -= 1
            } 
        
            
        },
        
    }

})

export const {addCart, incrementQty,decrementQty} = cartSlice.actions;

export default cartSlice.reducer;

