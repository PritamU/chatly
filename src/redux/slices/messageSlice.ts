import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MessageInterface } from "../../types";

export interface MessageSliceInterface {
  messages: MessageInterface[];
}

const initialState: MessageSliceInterface = {
  messages: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (
      state,
      action: PayloadAction<{ data: MessageInterface[] }>
    ) => {
      const { data } = action.payload;
      state.messages = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMessages } = messageSlice.actions;

export default messageSlice.reducer;
