import { postApiWithAuthentication } from "@/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface wishlistItem {
  id: string;
  name: string;
  img: string;
}
// Define a type for the slice state
interface wishlistState {
  isLoading: boolean;
  error: string;
  wishlist: wishlistItem[];
  totalWishlistItems: number;
}

// Define the initial state using that type
const initialState: wishlistState = {
  isLoading: false,
  error: "",
  wishlist: [],
  totalWishlistItems: 0,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // addWishlist: (state, action: PayloadAction<wishlistItem>) => {
    //   const findId = state.wishlist.find((e) => e.id === action.payload.id);
    //   if (findId) {
    //     return;
    //   }
    //   state.wishlist.push(action.payload);
    //   state.totalWishlistItems = state.wishlist.length;
    // },

    removeWishlist: (state, action) => {
      const newItems = state.wishlist.filter((e) => e.id !== action.payload);
      state.wishlist = newItems;
    },
  },
  extraReducers: (builder) => {
    // Add WishList
    builder.addCase(addWishlist.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(addWishlist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.wishlist = action.payload;
    });
    builder.addCase(addWishlist.rejected, (state) => {
      state.isLoading = false;
      state.error = "error";
    });
  },
});

export const { removeWishlist } = wishlistSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

// Async thunk to save to DB

export const addWishlist = createAsyncThunk(
  "wishlist/addWishlist",
  async (data) => {
    return postApiWithAuthentication(data, "/wishlist");
  }
);
