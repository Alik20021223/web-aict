import { configureStore } from "@reduxjs/toolkit";
import defSlice from "./defState/defSlice.tsx";
import { pageSlice } from "./pagesSlice.ts";

export const store = configureStore({
  reducer: {
    aict: defSlice,
    pages: pageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
