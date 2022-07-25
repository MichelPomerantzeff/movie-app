import "./css/Watchlist.css"
import MovieCardAdded from "./MovieCardAdded";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Watchlist() {
    const { watchlist } = useContext(GlobalContext)

    return (
        <div >
            <h1 className="heading">My watchlist</h1>

            {watchlist.length > 0 ?
            <div className="watchlistContainer">
            {
                watchlist.map(movie => {
                    return (
                        <MovieCardAdded 
                            key={movie.imdbID}
                            movie={movie}
                            type="watchlist"
                        />
                    )
                })
            }
        </div>
        :
        <div className="no-movies">    
            NO MOVIES ON YOUR WATCHLIST !!!
        </div>    
        
        }

        </div>
    )



}

export default Watchlist