import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../thunk/thunk";

const productSlice = createSlice({
    name: "product",
    initialState: {
        array: [],
        loading: false,
        error: "",
        category:"smartphones"
    },
    reducers: {
        setCategory:(state, action) => {

            state.category = action.payload;

            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.array = action.payload;
                state.loading = false
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

    }
})

export const {setCategory} = productSlice.actions

export default productSlice.reducer
