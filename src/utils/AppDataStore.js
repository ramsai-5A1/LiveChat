import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./Slices/MenuSlice";

const AppDataStore = configureStore({
    reducer: {
        menu: MenuSlice
    }
});

export default AppDataStore;