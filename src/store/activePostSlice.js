import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getPostById } from "../api"

export const fetchPost = createAsyncThunk("activePost/fetchPost", (id) => {
  return getPostById(id)
})

export const activePostSlice = createSlice({
  name: "activePost",
  initialState: {
    activePost: null,
  },
  extraReducers: {
    [fetchPost.pending]: (state) => {
      state.activePost = null
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.activePost = action.payload
    },
  },
})

export default activePostSlice.reducer
