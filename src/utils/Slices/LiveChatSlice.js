import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name: "livechat",
    initialState: {
        comments: []
    },
    reducers: {
        addComment: (state, action) => {
            if (state.comments.length > 20) {
                state.comments.splice(0, 1);
            }
            state.comments.push(action.payload);
        }
    }
});

export const { addComment } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;