import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./Slices/MenuSlice";
import LiveChatSlice from "./Slices/LiveChatSlice";

const AppDataStore = configureStore({
    reducer: {
        menu: MenuSlice,
        livechat: LiveChatSlice
    }
});

export default AppDataStore;