import { useEffect, useState } from "react"

import "../css/MovieInfo.css"

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';



function MovieInfo(props) {

    const { hideMovieInfoFromWatched, hideMovieInfoFromWatchlist } = useContext(GlobalContext)

    const [movie, setMovie] = useState("")

    // Fetch movie information based on its ID every time the user clicks on a movie
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${props.info.imdbID}&apikey=3b08cc46`)
            .then(response => response.json())
            .then(res => setMovie(res))
            .catch(err => console.log(err.message))
    }, [props.info])


    // Hide HomeMovieInfo Card from home page every time a new movie is searched
    useEffect(() => {
        setMovie("")
    }, [props.movieData])

    // Hide HomeMovieInfo Card from home page when the "X" button is clicked
    function hideInfo() {
        setMovie("")
    }


    return (
        <div>
            {
                movie &&

                <div className="movie_info_container">
                    <div className="movie-info-poster">
                        <img src={movie.Poster} alt="img" />
                    </div>
                    <div className="movie_info_details">
                        <h2 className="movie_info_title">{movie.Title}</h2>
                        <div className="movie_info">
                            <label>Plot:</label> <span>{movie.Plot}</span>
                        </div>
                        <div className="movie_info">
                            <label>Actors:</label> <span>{movie?.Actors}</span>
                        </div>
                        <div className="movie_info">
                            <label>Runtime:</label> <span>{movie.Runtime}</span>
                        </div>
                        <div className="movie_info">
                            <label>Release date:</label> <span>{movie.Released}</span>
                        </div>
                        <div className="movie_info">
                            <label>Director:</label> <span>{movie.Director}</span>
                        </div>
                        <div className="movie_info">
                            <label>Language:</label> <span>{movie.Language}</span>
                        </div>
                        <div className="movie_info">
                            <label>Genre:</label> <span>{movie.Genre}</span>
                        </div>
                        <div className="movie_info">
                            <label>Rating:</label> <span>{movie.imdbRating}</span>
                        </div>
                        <button onClick={() => {
                            hideMovieInfoFromWatched()
                            hideMovieInfoFromWatchlist()
                            hideInfo()
                        }} className="hideMovieInfo" ><ClearRoundedIcon /></button>
                    </div>
                </div>
            }
        </div>
    )
}

export default MovieInfo