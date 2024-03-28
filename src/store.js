import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from './components/redux/reducers/registrationSlice'
import loginSlice from './components/redux/reducers/loginSlice'
import recipesSlice from './components/redux/reducers/recipesSlice'
import searchSlice from './components/redux/reducers/searchSlice'

export const store = configureStore({
    reducer: {
        registrationSlice,
        loginSlice,
        recipesSlice,
        searchSlice
    }
})