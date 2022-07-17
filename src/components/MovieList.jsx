import "./MovieList.css"

function MovieList(props) {
    
    return (

        <div className="singleMovie" >

            <div className="movieCover">
                <img src={props.poster} />
            </div>

            <div className="movieInfo">
                <div className="movieName">
                    <span>{props.movieName}</span>
                </div>

                <div className="rateAndYear">
                    <span>{props.year}</span>
                    <span>{props.type}</span>
                </div>
            </div>

        </div>


    )
}

export default MovieList