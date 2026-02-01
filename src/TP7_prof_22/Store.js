import { configureStore } from "@reduxjs/toolkit";
import tutoReducer from "./TutoSlice";

export default configureStore({
  reducer: {
    tutoriel: tutoReducer,
  },
});
