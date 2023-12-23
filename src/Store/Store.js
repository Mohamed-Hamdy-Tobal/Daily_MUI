import { configureStore } from '@reduxjs/toolkit'
import dashReducer from './Reducers/dashReducer'


export const store = configureStore({
    reducer: {
        dashReducer: dashReducer
    },
})