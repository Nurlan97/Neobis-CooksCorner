import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const userLogin = createAsyncThunk(
    'user/login',
    async (data, {rejectWithValue}) => {
        try{
            const response = await axios.post('https://cooks-corner-production.up.railway.app/v1/auth/login', data)

            // if(response?.data?.response?.status !== 200) {
            //     throw new Error('Server Error')
            // }

            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            localStorage.setItem('userId', response.data.userId)
            localStorage.setItem('name', response.data.name)

            console.log(response.data)
            return response.data
        } catch(error) {
            console.log(error)
            rejectWithValue(error.response.data)
        }
    }
)