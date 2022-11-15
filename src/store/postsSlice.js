import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getPostsId } from "../api"

export const fetchPostsId = createAsyncThunk("posts/fetchPostsId", () => {
  return getPostsId()
})
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    status: null,
    postsId: new Array(100),
  },
  extraReducers: {
    [fetchPostsId.pending]: (state) => {
      state.postsId = new Array(100)
      state.status = "loading"
    },
    [fetchPostsId.fulfilled]: (state, action) => {
      state.status = "resolved"
      state.postsId = action.payload
    },
  },
})

export default postsSlice.reducer
