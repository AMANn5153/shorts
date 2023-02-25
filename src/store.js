import { configureStore } from "@reduxjs/toolkit";
import news from "./feature/Article.js"
export const store=configureStore({
    reducer:{
        news
    }
})