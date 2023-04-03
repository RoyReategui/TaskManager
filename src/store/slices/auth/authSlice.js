import { createSlice } from '@reduxjs/toolkit'
const authStateinitial = {
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: authStateinitial,
    reducers: {
        loging: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})

// Action creators are generated for each case reducer function
export const { loging, logout } = authSlice.actions
