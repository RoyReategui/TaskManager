import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice'
import { registerUserSlice } from './slices/registerUser/registerUserSlice'
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        registerUser: registerUserSlice.reducer
    }
})
