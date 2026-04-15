import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuOpen: false,
  authView: "login",
  searchTerm: "",
  category: "All",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setAuthView: (state, action) => {
      state.authView = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {
  setMobileMenuOpen,
  toggleMobileMenu,
  setAuthView,
  setSearchTerm,
  setCategory,
} = uiSlice.actions;

export default uiSlice.reducer;
