import {configureStore} from '@reduxjs/toolkit'
import usersListReducer from './features/users/usersSlice'
import registerReducer from "./features/users/registerSlice";
import positionsListReducer from './features/positions/positionsSlice'

const store = configureStore({
    reducer: {
        usersList: usersListReducer,
        register: registerReducer,
        positionsList: positionsListReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
