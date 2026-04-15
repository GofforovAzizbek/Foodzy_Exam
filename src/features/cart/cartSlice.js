import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const findItem = (state, productId) =>
  state.items.find((item) => item.id === productId);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = findItem(state, item.id);

      if (existing) {
        existing.quantity += item.quantity || 1;
        return;
      }

      state.items.push({
        ...item,
        quantity: item.quantity || 1,
      });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = findItem(state, id);

      if (!existing) return;

      existing.quantity = Math.max(1, quantity);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartSubtotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
