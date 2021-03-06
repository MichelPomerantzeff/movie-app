import { useEffect, useState } from "react"


import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";



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

                <div className="movieInformation">
                    <div className="movie-info-poster">
                        <img src={movie.Poster} alt="img" />
                    </div>
                    <div className="writtingInfo">
                        <h3><strong>{movie.Title}</strong></h3>
                        <span><strong>Plot:</strong> {movie.Plot}</span>
                        <span><strong>Actors:</strong> {movie.Actors}</span>
                        <span><strong>Runtime:</strong> {movie.Runtime}</span>
                        <span><strong>Release date:</strong> {movie.Released}</span>
                        <span><strong>Director:</strong> {movie.Director}</span>
                        <span><strong>Language:</strong> {movie.Language}</span>
                        <span><strong>Genre:</strong> {movie.Genre}</span>
                        <span><strong>Rating:</strong> {movie.imdbRating}</span>
                        <button onClick={() => {
                            hideMovieInfoFromWatched()
                            hideMovieInfoFromWatchlist()
                            hideInfo()
                        }} className="hideMovieInfo" >X</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default MovieInfo