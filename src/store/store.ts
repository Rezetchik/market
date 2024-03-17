import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/slice';

export const store = configureStore({
  reducer: {
    cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
