import { configureStore } from "@reduxjs/toolkit";
import { wishlistSlice } from "./slice/wishlistSlice";
import { authSlice } from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice.reducer,
    user: authSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
