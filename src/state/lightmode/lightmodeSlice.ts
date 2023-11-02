import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    isLightMode: boolean;
}

const initialState: ThemeState = {
    isLightMode: true
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isLightMode = !state.isLightMode;
        }
    }
})

export const { toggleTheme} = themeSlice.actions
export default themeSlice.reducer