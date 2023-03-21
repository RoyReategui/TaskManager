import { createSlice } from '@reduxjs/toolkit'

const initState = {
    id: 0,
    name: '',
    email: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        update: (state, action) => {
            state = action.payload
        },
        reset: (state) => {
            state = initState
        }
    }
})

// Action creators are generated for each case reducer function
export const { update, reset } = userSlice.actions
