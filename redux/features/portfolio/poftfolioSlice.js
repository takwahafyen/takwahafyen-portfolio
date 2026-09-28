import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    portfolioInfo: null,
};

export const poftfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        addPortfolioInfo: (state, { payload }) => {
            state.portfolioInfo = payload;
        },
        clearPortfolioInfo: (state) => {
            state.portfolioInfo = null;
        },
    },
});

export const { addPortfolioInfo, clearPortfolioInfo } = poftfolioSlice.actions;

export default poftfolioSlice.reducer;
