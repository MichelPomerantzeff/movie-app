import { useEffect, useState } from "react"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faEye } from "@fortawesome/free-solid-svg-icons"

import "../css/MovieList.css"

function MovieList(props) {

    const [movieListData, setMovieListData] = useState([])

    // Fetch a list of movies based on the searchbar input value
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${props.movieName}&apikey=3b08cc46`)
            .then(response => response.json())
            .then(res => setMovieListData(res.Search))
            .catch(err => console.log(err.message))
    }, [props.movieName])

    // Send selected movie to Parent Component (Home), which will be sent to Sibling Component (HomeMovieInfo)
    function selectMovie(id) {
        const selectedMovie = movieListData.filter(movie => movie.imdbID === id)
        props.selectedMovie(selectedMovie)
    }

    return (

        <div className="movieContainer">
            {
                movieListData !== undefined ?
                    movieListData.map(movie => {
                        return (

                            <div key={movie.imdbID} className="singleMovie" >

                                <div className="movieCover" onClick={() => selectMovie(movie.imdbID)}>
                                    <img src={movie.Poster} alt="img" />
                                </div>


                                <div className="movieInfo">

                                    <span className="movieName">{movie.Title}</span>

                                    <div className="movieListBtns">

                                        <div className="addBtn">
                                            + Watchlist
                                        </div>

                                        <div className="infoIcon" onClick={() => selectMovie(movie.imdbID)}>
                                            i
                                        </div>
                                        
                                    </div>

                                    <div className="rateAndYear">
                                        <span>{movie.Year}</span>
                                        <span>{movie.Type}</span>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                    :
                    <div className="notFound">
                        No results
                    </div>
            }
        </div>


    )
}

export default MovieList