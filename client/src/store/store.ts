import { configureStore } from "@reduxjs/toolkit";
import serachReducer from "./slice/serachslice";


export const store = configureStore({
  reducer: {
    search: serachReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;