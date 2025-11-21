import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

export const getProduct = createAsyncThunk(
    "product/fetch",
    async (category,{rejectWithvalue}) => {
        try{
            const res = await apiClient.get(`/products/category/${category}`)
    
            return res.data.products
        }catch (error) {
           return rejectWithvalue(error.massage || "error not found")
        }
    }
)
