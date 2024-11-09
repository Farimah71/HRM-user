import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducers } from "../reducers/Index";


export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})