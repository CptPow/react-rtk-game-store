import { useEffect } from "react"
import fetchCalls from "./components/fetchCalls"
import { useDispatch, useSelector } from "react-redux";


function App() {
  const error = useSelector((state) => state.game.error);
  const isLoading = useSelector((state) => state.game.isLoading);
  const gameList = useSelector((state) => state.game.game);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCalls());
  },[dispatch])



  if(error) {return <h1>Errore API</h1>}
  if(isLoading) {return <h1>Caricamento</h1>}
  return (
    <div className="row justify-content-center gx-3 gy-3"> 
    <h1 className="text-dark fw-bold text-center">Game Store:</h1>
      {gameList.map((game, index) => (
      <div key={index} className="col-5 col-sm-4 col-md-4 col-xxl-6" style={{maxWidth: "18rem"}}> 
      <div className="card text-light position-relative" > 
        <img src={game.background_image} className=" card-img" width={340} height={140}  alt="..."/>
        <div className="card-img-overlay p-0">
        <p className="card-title m-1 fw-bold text-center mt-2">{game.name}</p>
        <h6 className="card-text position-absolute top-50 p-3">Rating: {game.rating}</h6>
        </div>
        </div>
      </div>
        ))}
    </div>
      
  )
}
export default App
