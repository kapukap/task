import {createSlice} from '@reduxjs/toolkit'
import {getPositions} from "./actions";

const initialState = {
    positions: [],
    loading: 'idle',
    error: null
}

export const positionsSlice = createSlice({
    name: 'positions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPositions.pending, (state) => {
                state.loading = true
            })
            .addCase(getPositions.fulfilled, (state, action) => {
                state.loading = false
                state.positions.push(...action.payload.positions)
            })
            .addCase(getPositions.rejected, (state, action) => {
                state.error = action.payload ? action.payload.message : action.error
                state.loading = false
                state.positions = []
            })
    }
})

export default positionsSlice.reducer
