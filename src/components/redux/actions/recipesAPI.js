import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getRecipes = createAsyncThunk(
    'get/recipes',
    async (data, {rejectWithValue}) => {
        try{
            const response = await axios.get(`https://cooks-corner-production.up.railway.app/v1/recipes/category/${data}`)

            if(response.status !== 200) {
                throw new Error('Server Error')
            }
            // console.log(response.data.content)
            return response.data.content
        } catch(error) {
            console.log(error)
            rejectWithValue(error.response.data)
        }
    }
)
