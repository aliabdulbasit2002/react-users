import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

let initialState = {
  users: [
    {
      id: uuid(),
      name: "Ali",
      email: "Ali@email.com",
      gen: 24,
    },
    {
      id: uuid(),
      name: "Yusra",
      email: "Yusra@email.com",
      gen: 22,
    },
    {
      id: uuid(),
      name: "Lamin",
      email: "Lamin@email.com",
      gen: 19,
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
