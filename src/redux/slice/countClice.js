import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name:"counter",
    initialState:{
        timer:3,
        color:""
    },
    reducers:{
        increment:(number) => {
        number.timer += 1;
        },
        decrement:(state) => {
            if(state.timer > 0){
               state.timer -= 1; 
            }   
         },
         send: (state,action) =>{
            state.timer += action.payload
         },
         
         
    }
})

export const {increment,decrement,send} = countSlice.actions;

export default countSlice.reducer
