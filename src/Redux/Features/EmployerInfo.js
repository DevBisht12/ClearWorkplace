import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyInfo: {}, 
};

const GetCompanyInfoSlice = createSlice({
  name: 'CompanyInfo',
  initialState,
  reducers: {
    setCompanyInfo: (state, action) => {
      state.companyInfo = action.payload;
    },
  },
});

export const { setCompanyInfo } = GetCompanyInfoSlice.actions;
export default GetCompanyInfoSlice.reducer;
