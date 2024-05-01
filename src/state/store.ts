import { configureStore } from "@reduxjs/toolkit";
import defSlice from "./defState/defSlice.tsx";

export const store = configureStore({
  reducer: {
    aict: defSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
