import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
//   name: "name",
  gmail: "@gmail.com",
  password: "password",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
    //   state.name = action.payload.name;
      state.gmail = action.payload.gmail;
      state.password = action.payload.password;
    },
    setLogout: () => initialState,
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
