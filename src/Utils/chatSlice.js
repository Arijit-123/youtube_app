import { createSlice } from "@reduxjs/toolkit";
import { LIVECHATCOUNT } from "./constants";

const chatslice=createSlice({
name:'chat',
initialState:{
    messages:[]
},
reducers:{
    addMessage:(state, action)=>{
        state.messages.splice(LIVECHATCOUNT,1);
state.messages.unshift(action.payload);
    },
},
})

export const{addMessage}=chatslice.actions;
export default chatslice.reducer;