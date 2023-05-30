import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./stores/User";
import filterReducer from "./stores/Filter";

export default configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
  },
});
