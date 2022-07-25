import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const eye = <FontAwesomeIcon className="eye" icon={faEye} />
const trash = <FontAwesomeIcon className="trash" icon={faTrash} />
const eyeSlash = <FontAwesomeIcon className="eyeSlash" icon={faEyeSlash} />
const infoIcon = <FontAwesomeIcon className="eyeSlash" icon={faCircleInfo} />

function MovieControls(props) {

    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
    } = useContext(GlobalContext);

    return (
        <div className="card-controls">
            {props.type === "watchlist" && (
                <div className="control-btns">

                    <button
                        className="control-btn"
                    >
                        {infoIcon}
                    </button>

                    <button
                        className="control-btn"
                        onClick={() => addMovieToWatched(props.movie)}
                    >
                        {eye}
                    </button>


                    <button
                        className="control-btn"
                        onClick={() => removeMovieFromWatchlist(props.movie.imdbID)}
                    >
                        {trash}
                    </button>
                </div>
            )}

            {props.type === "watched" && (
                <div className="control-btns">

                    <button
                        className="control-btn"
                    >
                        {infoIcon}
                    </button>

                    <button
                        className="control-btn"
                        onClick={() => moveToWatchlist(props.movie)}
                    >
                        {eyeSlash}
                    </button>

                    <button
                        className="control-btn"
                        onClick={() => removeFromWatched(props.movie.imdbID)}
                    >

                        {trash}
                    </button>
                    
                </div>
            )}
        </div>
    );
}

export default MovieControls;