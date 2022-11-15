import { configureStore } from "@reduxjs/toolkit"

import postsReduser from "./postsSlice"
import activePostReduser from "./activePostSlice"
import commentsSlice from "./commentsSlice"
import searchSlice from "./searchSlice"

export const store = configureStore({
  reducer: {
    posts: postsReduser,
    activePost: activePostReduser,
    comments: commentsSlice,
    search: searchSlice,
  },
})
