import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    game: [],
    isLoading: false,
    error: null,
}


const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        callGameStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
    callGameSucces: (state, {payload}) => {
        state.game = payload;
        state.isLoading = false;
    },
    callGameFailure: (state, {payload}) => {
        state.error = payload;
        state.isLoading = false;
    }
}
})

export const {callGameStart, callGameSucces, callGameFailure} = gameSlice.actions
export default gameSlice.reducer