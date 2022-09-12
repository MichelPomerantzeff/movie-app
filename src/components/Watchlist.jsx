import "./css/Watchlist.css"

import MovieCardAdded from "./MovieCardAdded";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieInfo from "./MovieInfo";
import { useState } from "react";
import { useEffect } from "react";

function Watchlist() {

    const { watchlist, watchlistMovieInfo } = useContext(GlobalContext)

    const [moviesNumber, setMoviesNumber] = useState(0)
    const [seriesNumber, setSeriesNumber] = useState(0)

    useEffect(() => {
        let movies = 0
        let series = 0
        watchlist.filter(movie => {
            movie.Type === "movie" ? movies ++ : series++
        })
        setMoviesNumber(movies)
        setSeriesNumber(series)
    }, [watchlist])

    

    return (
        <div>
            <div className="list-info">
                <div className="amount-container">
                    <p className="number-of movies">Movies: {moviesNumber}</p>
                    <p className="number-of series">Series: {seriesNumber}</p>
                </div>
                <h1 className="heading">My watchlist</h1>
            </div>

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