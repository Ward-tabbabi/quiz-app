import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./userSlice/questionSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,

    Questions: questionSlice,
  },
});
