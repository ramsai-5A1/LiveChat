import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: "menu",
    initialState: {
        shouldOpenSideBar: true
    },
    reducers: {
        switchOffMenu: (state) => {
            state.shouldOpenSideBar = false;
        },
        toggleMenu: (state) => {
            state.shouldOpenSideBar = !state.shouldOpenSideBar;
        },
        switchOnMenu: (state) => {
            state.shouldOpenSideBar = true;
        }
    }
});

export const { switchOffMenu, toggleMenu, switchOnMenu } = MenuSlice.actions;
export default MenuSlice.reducer;