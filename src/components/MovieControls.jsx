import "../css/MovieControls.css"
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

function MovieControls(props) {

    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
        displayMovieInfoFromWatchlist,
        displayMovieInfoFromWatched
    } = useContext(GlobalContext);

    return (
        <div className="card-controls">
            {props.type === "watchlist" && (
                <div className="control_button_container">

                    <div className="control_button_wrapper">

                        <button
                            className="control-btn"
                            onClick={() => addMovieToWatched(props.movie)}
                            title="add to watched"
                        >
                            <div className="to_watched"><RedoIcon className="eye" /></div>
                            <span>Watched</span>
                        </button>
                    </div>

                    <div className="control_icon_buttons">
                        <div className="control_button_wrapper">

                            <button
                                className="control-btn"
                                onClick={() => displayMovieInfoFromWatchlist(props.movie)}
                                title="info"
                            >
                                <InfoSharpIcon className="info" />
                            </button>
                        </div>

                        <div className="control_button_wrapper">

                            <button
                                className="control-btn"
                                onClick={() => removeMovieFromWatchlist(props.movie.imdbID)}
                                title="delete"
                            >
                                <DeleteForeverIcon className="trash" />
                            </button>
                        </div>
                    </div>

                </div>
            )}

            {props.type === "watched" && (








                <div className="control_button_container">

                    <div className="control_button_wrapper">

                        <button
                            className="control-btn"
                            onClick={() => moveToWatchlist(props.movie)}
                            title="add to watchlist"
                        >
                            <span>Watchlist</span>
                            <div className="to_watchlist"><UndoIcon className="eye" /></div>
                        </button>
                    </div>

                    <div className="control_icon_buttons">
                        <div className="control_button_wrapper">

                            <button
                                className="control-btn"
                                onClick={() => displayMovieInfoFromWatched(props.movie)}
                                title="info"
                            >
                                <InfoSharpIcon className="info" />
                            </button>
                        </div>

                        <div className="control_button_wrapper">

                            <button
                                className="control-btn"
                                onClick={() => removeFromWatched(props.movie.imdbID)}
                                title="delete"
                            >

                                <DeleteForeverIcon className="trash" />
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default MovieControls;