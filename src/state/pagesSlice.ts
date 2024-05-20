import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    loadingPage: false,
  },
  reducers: {
    setLoadingPage(state, action: PayloadAction<boolean>) {
      state.loadingPage = action.payload;
    },
  },
});

export const { setLoadingPage } = pageSlice.actions;
