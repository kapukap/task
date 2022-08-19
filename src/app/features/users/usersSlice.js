import {createSlice} from '@reduxjs/toolkit'
import {getUsers} from "./actions";

const initialState = {
    users: [],
    totalPages: 0,
    currentPage: 1,
    loading: false,
    error: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        showNextPage: (state) => {
            state.currentPage += 1
        },
        resetUsers: (state) => {
            state.users = []
            state.currentPage = 1
        }
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = true
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.totalPages = action.payload.total_pages
            state.users.push(...action.payload.users)
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload ? action.payload.message : action.error
        }
    }
})

export const {showNextPage, resetUsers} = usersSlice.actions

export default usersSlice.reducer
