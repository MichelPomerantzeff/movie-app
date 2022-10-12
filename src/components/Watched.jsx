import "../css/Watched.css"

import MovieCardAdded from "./MovieCardAdded";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieInfo from "./MovieInfo";

function Watched() {

    const { watched, watchedMovieInfo } = useContext(GlobalContext)

    const [moviesNumber, setMoviesNumber] = useState(0)
    const [seriesNumber, setSeriesNumber] = useState(0)

    useEffect(() => {
        let movies = 0
        let series = 0
        watched.filter(movie => {
            movie.Type === "movie" ? movies++ : series++
        })
        setMoviesNumber(movies)
        setSeriesNumber(series)
    }, [watched])

    return (
        <div >

            <div className="list-info">
                <div className="amount-container">
                    <p className="number-of movies">Movies: {moviesNumber}</p>
                    <p className="number-of series">Series: {seriesNumber}</p>
                </div>
                <h1 className="heading">Watched movies/series</h1>
            </div>

            {
                watchedMovieInfo &&
                <MovieInfo info={watchedMovieInfo[0]} />
            }

            {watched.length > 0 ?
                <div className="watchlistContainer">
                    {
                        watched.map(movie => {
                            return (
                                <MovieCardAdded
                                    key={movie.imdbID}
                                    movie={movie}
                                    type="watched"
                                />
                            )
                        })
                    }
                </div>
                :
                <div className="no-movies">
                    NO WATCHED MOVIES
                </div>

            }

        </div>
    )

}

export default Watched