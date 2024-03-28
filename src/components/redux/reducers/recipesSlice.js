import { createSlice } from '@reduxjs/toolkit'
import { getRecipes } from '../actions/recipesAPI'

const initialState = {
    status: 'empty',
    error: '',
    data: [],
}

const recipesSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecipes.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(getRecipes.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.error = ''
                state.data = action.payload
            })

    }

})


export default recipesSlice.reducer