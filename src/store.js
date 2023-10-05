import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./Redux/Reducers/gameSlice";


const store = configureStore({
reducer: {
    game: gameSlice
}
});

export default store