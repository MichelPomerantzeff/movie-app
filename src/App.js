import Topbar from "./components/Topbar";
import SearchField from "./components/SearchField";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
// import MovieInfo from "./components/MovieInfo";
// import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";


function App() {

  const [search, setSearch] = useState([])
  const [movieName, setMovieName] = useState()
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



  function incomingValues(movie) {
    setMovieID(movie[0].imdbID)
  }



  return (
    <div >
      <img className="backgroung" src="film.jpg" alt="Background" />
      <div className="app">
        <Topbar />
        <SearchField
          handleSearch={handleSearch}
          searchMovie={searchMovie}
        />
        <MovieInfo
          movieID={movieID}
        />
        <MovieList
          movieName={movieName}
          info={incomingValues}
        />


        {/* <MovieList /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App;
