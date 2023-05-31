import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    data: {
      id: "",
      username: "user",
      email: "mail",
      phone: "phone",
      adress: "adress",
      contactName: "contact",
      contactPhone: "1234321123",
      img_url: "",
      createdDate: "date",
    },
    isLogged: false,
    isAdmin: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.data = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      state.data = {};
    },
    setLoggedIn: (state) => {
      state.isLogged = true;
    },
    setAsAdmin: (state) => {
      state.isAdmin = true;
    },
  },
});

export const { login, logout, setUserType, setLoggedIn, setAsAdmin } =
  user.actions;
export default user.reducer;
