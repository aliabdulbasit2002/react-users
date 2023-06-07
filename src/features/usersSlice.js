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
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    saveChanges: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload.updatedUser;
        }
        return user;
      });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => {
        if (user.id !== action.payload) return user;
      });
    },
  },
});

export const { addUser, saveChanges, deleteUser } = userSlice.actions;

export default userSlice.reducer;
