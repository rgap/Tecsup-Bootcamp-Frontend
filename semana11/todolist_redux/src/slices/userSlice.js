import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // data: localStorage.getItem("user")
    //   ? JSON.parse(localStorage.getItem("user"))
    //   : localStorage.getItem("user"),
    data: JSON.parse(localStorage.getItem("user")),
  },
  reducers: {
    saveUser: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
