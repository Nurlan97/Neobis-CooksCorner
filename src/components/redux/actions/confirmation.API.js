import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const userConfirmation = createAsyncThunk(
    'user/confirmation',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.put(`https://cooks-corner-production.up.railway.app/v1/auth/confirmation?ct=${token}`)
            console.log(response.data)
            if (response.status !== 200) {
                throw new Error('Server Error')
            }
            return response.data


        } catch (error) {
            rejectWithValue(error.response.data)
            console.log(error)
        }
    }
)
