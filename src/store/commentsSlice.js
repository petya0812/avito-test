import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getCommentsId } from "../api"

export const fetchCommentsId = createAsyncThunk(
  "activePost/fetchCommentsId",
  (id) => {
    return getCommentsId(id)
  }
)

export const commentsSlice = createSlice({
  name: "activePost",
  initialState: {
    commentsId: null,
    status: null,
  },
  reducers: {
    deleteComment(state, action) {
      state.commentsId = state.commentsId.filter(
        (item) => item !== action.payload
      )
    },
  },
  extraReducers: {
    [fetchCommentsId.pending]: (state) => {
      state.commentsId = null
      state.status = "loading"
    },
    [fetchCommentsId.fulfilled]: (state, action) => {
      state.commentsId = action.payload
      state.status = "resolved"
    },
  },
})
export const { deleteComment } = commentsSlice.actions

export default commentsSlice.reducer
