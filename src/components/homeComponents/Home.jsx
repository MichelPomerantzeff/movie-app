import SearchField from "./SearchField";
import MovieList from "./MovieList";
import MovieInfo from "./MovieInfo";

import { useState } from "react";


function App() {

    const [search, setSearch] = useState("Avengers")
    const [movieName, setMovieName] = useState("Avengers")
    const [movieID, setMovieID] = useState()

    // Get value from input field
    function handleSearch(e) {
        setSearch(e.target.value)
    }

    // Assign input field value to movieName variable and send that value to movieList Component.
    // This way there wont be too many requests while the user is typing on the input field.
    function searchMovie() {
        setMovieName(search)

    }


    // data coming from Child Component (MovieList )
    function incomingValues(movie) {
        setMovieID(movie[0].imdbID)
    }




    return (


        <div >
            <SearchField
                handleSearch={handleSearch}
                searchMovie={searchMovie}
            />
            <MovieInfo
                movieID={movieID}
                movieName={movieName}
            />
            <MovieList
                movieName={movieName}
                info={incomingValues}
            />
        </div>




    )



}

export default App;
