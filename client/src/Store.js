import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./stores/User";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
