import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChannel: null,
  isLoading: false,
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    fetchChannel: (state, action) => {      
      state.currentChannel = action.payload;
    },
    addSub: (state) => {
      state.currentChannel.subscribers += 1;
    },
    restSub: (state) => {
      state.currentChannel.subscribers -= 1;
    },
  },
});

export const { addSub, restSub, fetchChannel } =
channelSlice.actions;

export default channelSlice.reducer;
