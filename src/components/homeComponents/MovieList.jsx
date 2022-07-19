import { useEffect, useState } from "react"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faEye } from "@fortawesome/free-solid-svg-icons"

import "../css/MovieList.css"

function MovieList(props) {

    const [movieListData, setMovieListData] = useState([])

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${props.movieName}&apikey=3b08cc46`)
            .then(response => response.json())
            .then(res => setMovieListData(res.Search))
            .catch(err => console.log(err.message))

    }, [props.movieName])

    function movieInfo(id) {
        const selectedMovie = movieListData.filter(movie => movie.imdbID === id)
        props.info(selectedMovie)
        window.scrollTo(300, 300)
    }

    return (

        <div className="movieContainer">
            {
                movieListData !== undefined ?
                    movieListData.map(movie => {
                        return (

                            <div key={movie.imdbID} className="singleMovie" >

                                <div className="movieCover" onClick={() => movieInfo(movie.imdbID)}>
                                    <img src={movie.Poster} alt="img" />
                                </div>

                                {/* <FontAwesomeIcon className="eye" icon={faEye} /> */}

                                <div className="movieInfo">

                                    <span className="movieName">{movie.Title}</span>

                                    <div className="movieListBtns">
                                        <div className="addBtn">+ Watchlist</div>
                                        <div className="infoIcon" onClick={() => movieInfo(movie.imdbID)}>i</div>
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