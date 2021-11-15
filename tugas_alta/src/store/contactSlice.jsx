import { createSlice } from "@reduxjs/toolkit";

const initialContact = {
  full_name: "",
  email: "",
  phone: "",
  nationality: "",
  message: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    data: initialContact,
  },
  reducers: {
    createContact: (state, action) => {
      const newContact = {
        full_name: action.payload.fname,
        email: action.payload.email,
        phone: action.payload.phone,
        nationality: action.payload.nationality,
        message: action.payload.message,
      };
      state.data = newContact;
    },
  },
});

export const { createContact } = contactSlice.actions;
export default contactSlice.reducer;