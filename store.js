import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slice/cardSclice'
import restaurentSclice from './slice/restaurentSclice'

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    restaurent:restaurentSclice
  },
})