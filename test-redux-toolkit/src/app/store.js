import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import accountReducer from "../features/accountSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
  },
});
