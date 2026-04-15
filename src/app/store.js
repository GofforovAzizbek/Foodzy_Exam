import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "@/features/cart/cartSlice";
import uiReducer from "@/features/ui/uiSlice";
import { productsApi } from "@/services/productsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
