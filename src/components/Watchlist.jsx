import "./css/Watchlist.css"

import MovieCardAdded from "./MovieCardAdded";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieInfo from "./MovieInfo";

function Watchlist() {

    const { watchlist, watchlistMovieInfo } = useContext(GlobalContext)

    return (
        <div >
            <h1 className="heading">My watchlist</h1>

            {
                watchlistMovieInfo &&
                <MovieInfo info={watchlistMovieInfo[0]} />
            }

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
                    NO MOVIES ON YOUR WATCHLIST
                </div>

            }

        </div>
    )



}

export default Watchlist