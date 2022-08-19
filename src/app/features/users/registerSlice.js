import {createSlice} from '@reduxjs/toolkit'
import {register} from "./actions";

const initialState = {
    loading: false,
    success: null,
    error: null
}

export const registerSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: {
        [register.pending]: (state) => {
            state.loading = true
        },
        [register.fulfilled]: (state) => {
            state.loading = false
            state.success = true
        },
        [register.rejected]: (state, action) => {
            state.error = action.payload ? action.payload.message : action.error
            state.loading = false
        },
    }
})

export default registerSlice.reducer
