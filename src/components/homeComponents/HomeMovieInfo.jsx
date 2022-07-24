import { useEffect, useState } from "react"
import "../css/MovieInfo.css"

function MovieInfo(props) {

    const [infoData, setInfoData] = useState("")

    // Fetch movie information based on its ID every time the user clicks on a movie
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${props.movieID}&apikey=3b08cc46`)
            .then(response => response.json())
            .then(res => setInfoData(res))
            .catch(err => console.log(err.message))
    }, [props.movieID])

    // Hide HomeMovieInfo Card from home page every time a new movie is searched
    useEffect(() => {
        setInfoData(false)
    }, [props.movieName])

    // Hide HomeMovieInfo Card from home page when the "X" button is clicked
    function hideCard() {
        setInfoData(false)
    }

    return (
        <div>
            {
                infoData &&

                <div className="movieInformation">
                    <div>
                        <img src={infoData.Poster} alt="img" />
                    </div>
                    <div className="writtingInfo">
                        <span><strong>Rating:</strong> {infoData.imdbRating}</span>
                        <span><strong>Year:</strong> {infoData.Year}</span>
                        <span><strong>Language:</strong> {infoData.Language}</span>
                        <span><strong>Release date:</strong> {infoData.Released}</span>
                        <span><strong>Runtime:</strong> {infoData.Runtime}</span>
                        <span><strong>Genre:</strong> {infoData.Genre}</span>
                        <span><strong>Director:</strong> {infoData.Director}</span>
                        <span><strong>Actors:</strong> {infoData.Actors}</span>
                        <span><strong>Plot:</strong> {infoData.Plot}</span>
                        <button onClick={hideCard} className="hideMovieInfo" >X</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default MovieInfo