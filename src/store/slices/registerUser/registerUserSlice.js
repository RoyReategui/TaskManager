import { createSlice } from '@reduxjs/toolkit'

export const registerUserSlice = createSlice({
    name: 'registerUser',
    initialState: {
        status: 'no-authenticated',
        uid: null,
        email: null,
        username: null,
        message: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.uid = payload.uid
            state.email = payload.email
            state.username = payload.username
            state.message = null
        },
        logout: (state, { payload }) => {
            state.status = 'no-authenticated'
            state.uid = null
            state.email = null
            state.username = null
            state.message = payload.message
        },
        checkingCredendial: (state) => {
            state.status = 'checking'
            state.message = null
        },
        resetState: (state) => {
            state.status = 'no-authenticated'
            state.uid = null
            state.email = null
            state.username = null
            state.message = null
        }
    }
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredendial, resetState } = registerUserSlice.actions
