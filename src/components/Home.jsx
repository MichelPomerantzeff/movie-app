import MovieCardHome from "./MovieCardHome";
import MovieInfo from "./MovieInfo"
import { useEffect, useState } from "react";
import "./css/Home.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const searchIcon = <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />


function Home() {

    const [search, setSearch] = useState("Avengers")
    const [movieData, setMovieData] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${search}&apikey=3b08cc46`)
            .then(res => res.json())
            .then(response => setMovieData(response.Search))
    }, [search])

    const handleSearch = (e) => {
        setTimeout(() => setSearch(e.target.value), 1000)
    }

    const sendInfoToSibling = (movieInfo) => {
        setInfo(movieInfo)
        window.scrollTo(100, 100)
    }

    return (

        <div className="home">

            <div className="homeTop" >
                <div className="homeTopContent">
                    <h1 className="heading">
                        <span>Movie App</span>
                    </h1>
                    <div className="searchBar">
                        <input onChange={handleSearch} className="field" type="text" name="search" id="search" placeholder="Search" />
                        <button className="searchIcon"> {searchIcon} </button>
                    </div>
                </div>
            </div>

            <MovieInfo info={info} movieData={movieData} />

            {
                movieData ?
                    <div className="movieContainer">
                        {
                            movieData.map(movie => {
                                return (
                                    <MovieCardHome
                                        key={movie.imdbID}
                                        movie={movie}
                                        sendInfoToSibling={sendInfoToSibling}
                                    />
                                )
                            })
                        }
                    </div>
                    :
                    <div className="noResults">
                        No Results
                    </div>
            }

        </div>
    )
}

export default Home;
