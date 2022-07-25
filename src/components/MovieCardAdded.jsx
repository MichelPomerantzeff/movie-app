import React from 'react';
import MovieControls from './MovieControls';

function MovieCardAdded(props) {
    return (
        <div className="watchlistMovieCard">
            <h3 className='watchlistMovieName'>{props.movie.Title}</h3>
            <img className="watchlistMovieCover" src={props.movie.Poster} alt={props.movie.Title} />
            <MovieControls type={props.type} movie={props.movie} />
        </div>
    );
}

export default MovieCardAdded;