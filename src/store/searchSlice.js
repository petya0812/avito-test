import { createSlice } from "@reduxjs/toolkit"

export const searchSlice = createSlice({
  name: "activePost",
  initialState: {
    searchValue: "",
    foundItems: [],
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    addFoundItem(state, action) {
      if (!state.foundItems.includes(action.payload)) {
        state.foundItems = [...state.foundItems, action.payload]
      }
    },
    removeFoundItem(state, action) {
      state.foundItems = state.foundItems.filter(
        (item) => item !== action.payload
      )
    },
  },
})
export const { setSearchValue, addFoundItem, removeFoundItem } =
  searchSlice.actions

export default searchSlice.reducer
