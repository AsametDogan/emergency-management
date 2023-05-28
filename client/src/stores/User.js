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
    isLogged: true,
    isAdmin: true ,
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
  },
});

export const { login, logout, setUserType, setLoggedIn } = user.actions;
export default user.reducer;
