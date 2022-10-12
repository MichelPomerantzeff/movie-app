import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import "../css/MovieCardHome.css"

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function MovieCardHome(props) {

    const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find((o) => o.imdbID === props.movie.imdbID);
    let storedMovieWatched = watched.find((o) => o.imdbID === props.movie.imdbID);
   
    let watchedDisabled = storedMovie ? true : storedMovieWatched ? true : false
   
    let buttonState = storedMovie || storedMovieWatched ? "off" : "on"


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

                <h3 className="movieName">{props.movie.Title}</h3>

                <div className="movieListBtns">

                    <button
                        className={`addMovieBtn ${buttonState}`}
                        disabled={watchedDisabled}
                        onClick={() => addMovieToWatchlist(props.movie)}
                        title="add to watchlist"
                    > 
                    <AddRoundedIcon className="add_icon"/>
                    <span>Watchlist</span>
                    </button>

                    <div className="infoBtn-bg">
                        <button className="infoBtn" onClick={() => displayMovieInfo(props.movie)} title="info"> <InfoOutlinedIcon/> </button>
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