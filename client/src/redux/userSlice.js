import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser:null,
    isLoading:false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        loginStart: (state)=>{
            state.isLoading = true;
        },
        loginSuccess: (state, action)=>{
            state.isLoading = false;
            state.currentUser = action.payload;
        },

        logout: (state)=>{
            state.currentUser= null;
            state.isLoading= false;
        },
    }
})

export const {loginFailure, loginStart, loginSuccess, logout} = userSlice.actions;

export default userSlice.reducer;