import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./admin";
import clientReducer from "./clients";

const store = configureStore({
  reducer: {
    client: clientReducer,
    admin: adminReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
