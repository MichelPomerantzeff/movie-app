import { faInfo } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import "./MovieList.css"

function MovieList(props) {



    const [movieListData, setMovieListData] = useState([])


    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${props.movieName}&apikey=3b08cc46`)
            .then(response => response.json())
            .then(res => setMovieListData(res.Search))
    }, [props.movieName])


    function movieInfo(id) {
        const selectedMovie = movieListData.filter(movie => movie.imdbID === id)
        props.info(selectedMovie)
    }



    return (

        <div className="movieContainer">
            {
                props.movieName ? movieListData.map((movie, index) => {

                    return (


                        <div onClick={() => movieInfo(movie.imdbID)} key={movie.imdbID} className="singleMovie" >


                            <div className="movieCover">
                                <img src={movie.Poster} />
                            </div>

                            <div className="movieInfo">
                                <div className="movieName">
                                    <span>{movie.Title}</span>
                                </div>

                                <div className="rateAndYear">
                                    <span>{movie.Year}</span>
                                    <span>{movie.Type}</span>
                                </div>
                            </div>

                        </div>


                    )

                })
                    : <div className="emptyField">No Movies showing</div>
            }
        </div>


    )
}

export default MovieList