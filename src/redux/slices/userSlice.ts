import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../types";

export interface UserSliceInterface {
  users: UserInterface[];
  currentUser: UserInterface | null;
  chatUser: UserInterface | null;
  isSocketConnected: boolean;
  isUserAuthLoading: boolean;
  isChatUserLoading: boolean;
  revalidateCurrentUserUtil: boolean;
}

const initialState: UserSliceInterface = {
  users: [],
  currentUser: null,
  chatUser: null,
  isSocketConnected: false,
  isChatUserLoading: false,
  isUserAuthLoading: false,
  revalidateCurrentUserUtil: false,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUsers: (
      state,
      action: PayloadAction<{ data: UserInterface[]; cookie: string }>
    ) => {
      let { data } = action.payload;
      const { cookie } = action.payload;

      data = data.filter((user) => {
        return user.id !== cookie;
      });

      state.users = data;
    },
    setCurrentUser: (
      state,
      action: PayloadAction<{ data: UserInterface | null }>
    ) => {
      const { data } = action.payload;
      state.currentUser = data;
    },
    setChatUser: (
      state,
      action: PayloadAction<{ data: UserInterface | null }>
    ) => {
      const { data } = action.payload;
      state.chatUser = data;
    },
    setIsSocketConnected: (state, action: PayloadAction<boolean>) => {
      state.isSocketConnected = action.payload;
    },
    setIsUserAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isUserAuthLoading = action.payload;
    },
    setIsChatUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isChatUserLoading = action.payload;
    },
    setIsRevalidateCurrentUserUtil: (state, action: PayloadAction<boolean>) => {
      state.revalidateCurrentUserUtil = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUsers,
  setCurrentUser,
  setIsSocketConnected,
  setIsUserAuthLoading,
  setChatUser,
  setIsChatUserLoading,
  setIsRevalidateCurrentUserUtil,
} = userSlice.actions;

export default userSlice.reducer;
