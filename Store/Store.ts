'use client';

import { configureStore } from '@reduxjs/toolkit'
import statesSlice from './Reducers/statesSlice'


export const store = configureStore({
    reducer: {
        statesSlice: statesSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;