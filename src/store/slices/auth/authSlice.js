import { createSlice } from '@reduxjs/toolkit'
import { ManagerLocalStorage } from '../../../helpers/ManagerLocalStorage'

const user = ManagerLocalStorage.getItem('user') || { username: null, uid: null }

export const authSlice = createSlice({
    name: 'registerUser',
    initialState: {
        status: 'no-authenticated',
        uid: user.uid,
        username: user.username,
        message: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.uid = payload.uid
            state.username = payload.username
            state.message = null
        },
        logout: (state, { payload }) => {
            state.status = 'no-authenticated'
            state.uid = null
            state.username = null
            state.message = payload?.message || ''
        },
        checkingCredendial: (state) => {
            state.status = 'checking'
            state.message = null
        },
        resetState: (state) => {
            state.status = 'no-authenticated'
            state.uid = null
            state.username = null
            state.message = null
        }
    }
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredendial, resetState } = authSlice.actions
