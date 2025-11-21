import { createSlice } from '@reduxjs/toolkit';

const wishSlice = createSlice({

    name: "wishlist",
    initialState: {
        list: []
    },
    reducers: {
        addWish: (state, action) => {
            state.list.push(action.payload)

        },
        deleteWish: (state, action) => {

            state.list = state.list.filter((x) => x.id != action.payload)

        }
    }
})

export const { addWish, deleteWish } = wishSlice.actions;
export default wishSlice.reducer;