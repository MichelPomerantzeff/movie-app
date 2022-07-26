import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

function MovieCardHome(props) {

    const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find((o) => o.imdbID === props.movie.imdbID);
    let storedMovieWatched = watched.find((o) => o.imdbID === props.movie.imdbID);
    let watchedDisabled = storedMovie ? true : storedMovieWatched ? true : false
    let on = storedMovie ? "" : "on"


    const displayMovieInfo = (movie) => {
        props.sendInfoToSibling(movie)
    }

    return (

        <div className="singleMovie" >

            <div
                onClick={() => displayMovieInfo(props.movie)}
                className="movieCover" >
                <img src={props.movie.Poster} alt="img" />
            </div>

            <div className="movieInfo">

                <h4 className="movieName">{props.movie.Title}</h4>

                <div className="movieListBtns">

                    <button
                        className={`addMovieBtn ${on}`}
                        disabled={watchedDisabled}
                        onClick={() => addMovieToWatchlist(props.movie)}
                    > + Watchlist </button>

                    <div className="infoBtn-bg">
                        <button className="infoBtn" onClick={() => displayMovieInfo(props.movie)}> i </button>
                    </div>

                </div>

                <div className="rateAndYear">
                    <span>{props.movie.Year}</span>
                    <span>{props.movie.Type}</span>
                </div>

            </div>
        </div>
    )
}

export default MovieCardHome