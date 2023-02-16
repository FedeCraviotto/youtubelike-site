import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },

    logout: (state) => {
      state.currentUser = null;
      state.isLoading = false;
    },
    subscribe: (state, action) => {
      state.currentUser.subscribedUsers.push(action.payload);
    },
    unsubscribe: (state, action) => {
      state.currentUser.subscribedUsers.splice(
        state.currentUser.subscribedUsers.findIndex((indexValue) => {
          return indexValue === action.payload;
        }),
        1
      );
    },
  },
});

export const { loginFailure, loginStart, loginSuccess, logout, subscribe, unsubscribe } =
  userSlice.actions;

export default userSlice.reducer;
