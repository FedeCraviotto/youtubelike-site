import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  isLoading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.currentVideo = action.payload;
      state.error = false;
    },
    fetchFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    like: (state, action) => {
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload);
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      } else {
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex(
            // A cada indice comparalo con el Id que te pase por payload. Al indice del que coincida -findIndex- sacamelo del [] del estado -splice-
            (userId) => userId === action.payload
          ),
          1
        );
      }
    },
    dislike: (state, action) => {
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        state.currentVideo.dislikes.push(action.payload);
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      } else {
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      }
    },
  },
});

export const { fetchFailure, fetchStart, fetchSuccess, like, dislike } = videoSlice.actions;

export default videoSlice.reducer;
