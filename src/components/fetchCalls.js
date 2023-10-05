import { callGameFailure, callGameStart, callGameSucces } from "../Redux/Reducers/gameSlice"

const url = "https://api.rawg.io/api/games?key=a2d5cc4cdabc4e38b020bd7612019b70&dates=2019-09-01,2019-09-30&platforms=18,1,7"


const fetchCalls = ()=> async (dispatch) => {
try {
    dispatch(callGameStart());
    const response = await fetch(url)
    if(!response.ok){
        throw new Error(`Errore richiesta API ${response.status}`)
    }
    const data = await response.json();
    dispatch(callGameSucces(data.results));
} catch (error) {
    dispatch(callGameFailure(error.toString()));
}
}

export default fetchCalls