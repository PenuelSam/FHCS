import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";

const store = configureStore({
    reducer: {
        modal : FormSlice,
    }
})

export default store;