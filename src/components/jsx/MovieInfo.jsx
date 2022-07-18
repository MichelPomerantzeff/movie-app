import { useEffect, useState } from "react"

import "../css/MovieInfo.css"


function MovieInfo(props) {

    const [infoData, setInfoData] = useState("")

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${props.movieID}&apikey=3b08cc46`)
            .then(response => response.json())
            .then(res => setInfoData(res))
    }, [props.movieID])

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