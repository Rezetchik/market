import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ItemInfo = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  count: number;
};

export interface cartState {
  value: number;
  items: ItemInfo[];
}

const initialState: cartState = {
  value: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'sliceCart',
  initialState,
  reducers: {
    decrement(state, action: PayloadAction<{ id: number; price: number }>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        if (findItem.count != 1) {
          findItem.count--;
          state.value -= action.payload.price;
        }
      }
    },
    increment(state, action: PayloadAction<{ id: number; price: number }>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        if (findItem.count != 10) {
          findItem.count++;
          state.value += action.payload.price;
        }
      }
    },
    removeItem(state, action: PayloadAction<{ id: number; price: number }>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        state.value -= action.payload.price * findItem.count;
        state.items = state.items.filter((obj) => obj.id != action.payload.id);
      }
    },
    addItems(state, action: PayloadAction<[]>) {
      state.items = action.payload;
      state.items.map((obj) => {
        obj.count = 0;
      });
    },
  },
});

export const { decrement, increment, removeItem, addItems } = cartSlice.actions;

export default cartSlice.reducer;
