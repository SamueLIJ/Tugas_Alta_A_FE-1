import { createSlice } from "@reduxjs/toolkit";

const initialContact = {
  data: [],
  loading: true,
};

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: initialContact,
  },
  reducers: {
    fetchNews: (state, action) => {
      const newData = {
        data: action.payload.data,
        loading: action.payload.loading,
      };
      state.data = newData;
    },
  },
});

export const { fetchNews } = newsSlice.actions;
export default newsSlice.reducer;