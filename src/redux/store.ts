import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import detailProjectReducer from "./slices/detailProjectSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    detailProject: detailProjectReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
