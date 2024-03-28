// const { createSlice } = require("@reduxjs/toolkit")
// const { userRegister } = require("../actions/registerAPI")
import { createSlice } from '@reduxjs/toolkit'
import { userRegister } from '../actions/registerAPI'

const initialState = {
    status: 'empty',
    error: '',
    data: {},
}

const userRegistrationSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(userRegister.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.error = ''
                state.data = action.payload
            })
    })
})

export default userRegistrationSlice.reducer