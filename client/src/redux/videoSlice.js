import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    video:null,
    isLoading:false,
    error:false
};

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers:{
        loginStart: (state)=>{
            state.isLoading = true;
        },
        loginSuccess: (state, action)=>{
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state)=>{
            state.isLoading = false;
            state.error = false;
        },
        logout: (state)=>{
            state.currentUser= null;
            state.isLoading= false;
            state.error= false;
        },
    }
})

export const {loginFailure, loginStart, loginSuccess, logout} = videoSlice.actions;

export default videoSlice.reducer;