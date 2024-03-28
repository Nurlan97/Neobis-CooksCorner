
import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../actions/loginAPI'

const initialState = {
    status: 'empty',
    error: '',
    data: {},
}

const userLoginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        Login: (state, action) => {
            state.data = action.payload
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.error = ''
                state.data = action.payload
            })

    }

})


export default userLoginSlice.reducer