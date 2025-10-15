import {configureStore} from '@reduxjs/toolkit';

import { cardSlice } from './cart-slice';

export const store = configureStore({
    reducer: {
        cart: cardSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch