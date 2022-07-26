import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist")
        ? JSON.parse(localStorage.getItem("watchlist"))
        : [],
    watched: localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : [],
    watchlistMovieInfo: "",
    watchedMovieInfo: ""
}

// create context
export const GlobalContext = createContext(initialState)

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])


    //actions
    const addMovieToWatchlist = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    }

    const moveToWatchlist = (movie) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
    }

    const removeFromWatched = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
    }

    const displayMovieInfoFromWatchlist = (movie) => {
        dispatch({ type: "DISPLAY_MOVIEINFO_FROM_WATCHLIST", payload: movie });
    }

    
    const hideMovieInfoFromWatchlist = (id) => {
        dispatch({ type: "HIDE_MOVIEINFO_FROM_WATCHLIST", payload: id });
    }
    
    const displayMovieInfoFromWatched = (movie) => {
        dispatch({ type: "DISPLAY_MOVIEINFO_FROM_WATCHED", payload: movie });
    }
    
    const hideMovieInfoFromWatched = (id) => {
        dispatch({ type: "HIDE_MOVIEINFO_FROM_WATCHED", payload: id });
    }

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                watchlistMovieInfo: state.watchlistMovieInfo,
                watchedMovieInfo: state.watchedMovieInfo,
                addMovieToWatchlist,
                removeMovieFromWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatched,
                displayMovieInfoFromWatchlist,
                hideMovieInfoFromWatchlist,
                displayMovieInfoFromWatched,
                hideMovieInfoFromWatched
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}