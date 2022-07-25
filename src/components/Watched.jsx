import "./css/Watched.css"

import MovieCardAdded from "./MovieCardAdded";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Watched() {

    const { watched } = useContext(GlobalContext)

    return (
        <div >
            <h1 className="heading">Watched movies</h1>

            {watched.length > 0 ?
                <div className="watchlistContainer">
                    {
                        watched.map(movie => {
                            return (
                                <MovieCardAdded
                                    key={movie.imdbID}
                                    movie={movie}
                                    type="watched"
                                />
                            )
                        })
                    }
                </div>
                :
                <div className="no-movies">
                    NO WATCHED MOVIES !!!
                </div>

            }

        </div>
    )

}

export default Watched