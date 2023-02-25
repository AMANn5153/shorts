import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initialState={
    status:"idle",
    news:[]
}

export const fetchData=createAsyncThunk("newsArticle/fetchData",async()=>{
try{
    const res=axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed")
    return res;
}
catch(e){
    console.log(e)
}
})

const newsArticle=createSlice(
    {
        name:"news",
        initialState,
        reducer:{
            cleanState(state,action){
                state.status="idle"
            }
        },
        extraReducers(builder){
            builder.addCase(fetchData.pending,(state)=>{
                state.status="pending";
            })
            .addCase(fetchData.fulfilled,(state,action)=>{
                state.status="fulfilled"
                state.news=action.payload.data
            })
            .addCase(fetchData.rejected,(state,action)=>{
                state.status="rejected";
            })
        }
    }
)

export default newsArticle.reducer;