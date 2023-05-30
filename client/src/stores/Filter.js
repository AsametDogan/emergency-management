import { createSlice } from "@reduxjs/toolkit";

export const filter = createSlice({
  name: "filter",
  initialState: {
    type: "",
    urgency: [0, 1, 2, 3, 4, 5],
  },
  reducers: {
    setUrgency: (state, action) => {
      state.urgency = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setUrgency, setType } = filter.actions;
export default filter.reducer;
