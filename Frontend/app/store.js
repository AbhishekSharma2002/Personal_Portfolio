import { configureStore } from "@reduxjs/toolkit";
// import  todoReducer  from '../feature/todo/todoSlice'
import todoReducer from '../src/feature/todo/todoSlice.js'

export const store = configureStore({
    reducer: todoReducer
})
