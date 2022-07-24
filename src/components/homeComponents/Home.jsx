import SearchField from "./HomeSearchField";
import MovieList from "./HomeMovieList";
import MovieInfo from "./HomeMovieInfo";
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

    // get value from Child Component (MovieList)
    function selectedMovie(movie) {
        setMovieID(movie[0].imdbID)
        window.scrollTo(300, 300)
    }

    return (

        <div >
            <SearchField
                handleSearch={handleSearch}
                searchMovie={searchMovie}
            />

            <MovieInfo
                movieName={movieName}

                // send data that came from Child Component (MovieList) to another Child Component (MovieInfo)
                movieID={movieID}
            />

            <MovieList
                movieName={movieName}

                // send function to Child Component (MovieList) to get data from it and bring it back here !!!
                selectedMovie={selectedMovie}
            />
        </div>
    )
}

export default App;
