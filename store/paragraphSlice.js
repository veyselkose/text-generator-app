import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getParagraph = createAsyncThunk(
  "paragraph/getParagraph",
  async ({ count, includeHTML }) => {
    const res = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${includeHTML}`
    ).then((data) => data.text());
    return res;
  }
);

export const paragraphSlice = createSlice({
  name: "paragraph",
  initialState: {
    text: "",
    loading: false,
    includeHTML: "text",
    count: 4,
  },
  reducers: {
    updateCount: (state, action) => {
      state.count = action.payload;
    },
    updateIncludeHTML: (state, action) => {
      state.includeHTML = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getParagraph.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getParagraph.fulfilled, (state, action) => {
      state.text = action.payload;
      state.loading = false;
    });
  },
});

export const { updateCount, updateIncludeHTML } = paragraphSlice.actions;

export default paragraphSlice.reducer;
