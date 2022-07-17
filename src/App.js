import Topbar from "./components/Topbar";
import SearchField from "./components/SearchField";
import MovieList from "./components/MovieList";
// import MovieInfo from "./components/MovieInfo";
// import Footer from "./components/Footer";
import "./App.css";
import { useEffect, useState } from "react";


function App() {

  const API_Key = "3b08cc46"

  const [search, setSearch] = useState([])
  const [movieName, setMovieName] = useState()
  const [movieListData, setMovieListData] = useState([])
  // const [movieInfoData, setMovieInfoData] = useState([])

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_Key}`)
      .then(response => response.json())
      .then(res => setMovieListData(res.Search))
  }, [movieName])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function searchMovie() {
    setMovieName(search)
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

        <div className="movieContainer">
          {
            movieName ? movieListData.map((movie, index) => {

              return (
                  <MovieList   
                    key={index}
                    movieName={movie.Title}
                    poster={movie.Poster}
                    type={movie.Type}
                    year={movie.Year}
                  />
              )
              
            }) 
            : <div className="emptyField">No Movies showing</div>
          }
        </div>

        {/* <MovieList /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App;
