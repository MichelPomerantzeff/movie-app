import "../css/WatchList.css"

function WatchList() {
    return (
        <div className="watchlistContainer">

            <div className="watchlistMovieCard">

                <div className="watchlistMovieCover">
                    Movie Cover
                </div>

                <div className="watchlistMovieName">
                    Movie Name
                </div>

                <div className="watchlistMovieBottomInfo">
                    <div className="watchlistMovieYear">
                        Year
                    </div>
                    <div className="watchlistMovieType">
                        Type
                    </div>
                </div>

            </div>

        </div>
    )

}

export default WatchList