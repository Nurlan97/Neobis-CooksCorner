import { createSlice } from '@reduxjs/toolkit'
import { searchRepices } from '../actions/searchRecipesAPI' 

const initialState = {
    status: 'empty',
    error: '',
    data: [],
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchRepices.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
            .addCase(searchRepices.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
            .addCase(searchRepices.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.error = ''
                state.data = action.payload
            })

    }

})


export default searchSlice.reducer