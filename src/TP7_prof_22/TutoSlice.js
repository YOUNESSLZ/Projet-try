import { createSlice } from "@reduxjs/toolkit";
import { listeTuto } from "./data";

const tutoSlice = createSlice({
  name: "tuto",
  initialState: {
    liste: listeTuto,
  },
  reducers: {
    ajouter: (state, action) => {
        state.liste = [...state.liste, action.payload];
    },
    supprimer: (state, action) => {
      state.liste = state.liste.filter((tuto) => tuto.code !== action.payload);
    },
    modifier: (state, action) => {
      state.liste = state.liste.map((tuto) =>
        tuto.code === action.payload.code ? action.payload : tuto
      );
    },
  },
});
export const { ajouter, modifier, supprimer } = tutoSlice.actions;
export default tutoSlice.reducer;
