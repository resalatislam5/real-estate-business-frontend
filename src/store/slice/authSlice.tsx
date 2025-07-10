import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "cookies-next";

interface initialStateType {
  user: userType;
}
interface userType {
  _id: string;
  image: string;
  name: string;
  token: string;
  role: string;
}

const initialUser = {
  _id: "",
  image: "",
  name: "",
  token: "",
  role: "",
};
const userCookie = getCookie("auth");
const initialState: initialStateType = {
  user: userCookie ? JSON.parse(userCookie as string) : initialUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<userType>) => {
      state.user = action.payload;
      // localStorage.setItem("auth", JSON.stringify(state.user));
      setCookie("auth", JSON.stringify(state.user));
    },
    logOutUser: (state) => {
      // setCookie("auth", null);
      state.user = initialUser;
      // redirect(action.payload ?? "/");
    },
  },
});

export const { addUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
