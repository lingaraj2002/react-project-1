import { createSlice } from "@reduxjs/toolkit";
import Objects from "../Video/Object";

const stateSlice = createSlice({
    name:'sample',
    initialState:{
        isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn")) || false,
        filter: Objects,
        afterFilter :JSON.parse(localStorage.getItem("local")) ||  [],
        forms:[],
        files: [],
        comment:[],
        user:JSON.parse(localStorage.getItem("user")) || [],
    },
    reducers:{
        afterFilter:(state,action)=>{
            state.afterFilter=action.payload
        },
        filter:(state,action)=>{
            state.filter=action.payload;
        },
        logedin:(state,action)=>{
            state.isLoggedIn=action.payload;
        },
        forms:(state,action)=>{
            state.forms=action.payload;
        },
        files: (state, action) => {
            state.files = action.payload;
        },
        comment: (state, action) => {
            state.comment = action.payload;
        },
        user:(state,action)=>{
            state.user=action.payload;
        },
    }
})

export const {logedin,forms,files,filter,afterFilter,comment,user} = stateSlice.actions;
export default stateSlice.reducer;