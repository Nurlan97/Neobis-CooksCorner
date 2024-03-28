import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const searchRepices = createAsyncThunk(
    'search/searchRepices',
    async (value, {rejectWithValue}) => {
        try{
            const response = await axios.get(`https://cooks-corner-production.up.railway.app/v1/recipes?query=${value}`)

            if(response.status !== 200) {
                throw new Error('Server Error')
            }
            return response.data.content
        } catch(error) {
            console.log(error)
            rejectWithValue(error.response.data)
        }
    }
)
