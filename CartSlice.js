import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {

    // 🔹 ADD ITEM
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity++;
    },

    // 🔹 INCREMENT
    incrementItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
      }
    },

    // 🔹 DECREMENT
    decrementItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          state.totalQuantity--;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload);
          state.totalQuantity--;
        }
      }
    },

    // 🔹 REMOVE ITEM
    removeItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    }
  }
});

export const { addItem, incrementItem, decrementItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
