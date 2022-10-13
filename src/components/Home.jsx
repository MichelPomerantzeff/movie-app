import MovieCardHome from "./MovieCardHome";
import MovieInfo from "./MovieInfo"
import { useEffect, useState } from "react";
import "../css/Home.css"

import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


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
        const interval = setTimeout(() => {
            e.target.value === "" ?
            setSearch("avengers")
            :
            setSearch(e.target.value)
        }, 500)

        return () => clearImmediate(interval)
    }

    const sendInfoToSibling = (movieInfo) => {
        setInfo(movieInfo)
        window.scrollTo(100, 100)
    }

    return (

        <div className="home">

            <div className="homeTop">
                <h1 className="heading">
                    <div className="heading_icon"><LiveTvRoundedIcon /></div>
                    <div className="heading_title">
                        Movie <span>App</span>
                    </div>
                </h1>
                <div className="searchBar">
                    <input onChange={handleSearch} className="field" type="text" name="search" id="search" placeholder="Search" />
                    <button className="searchIcon"> <SearchRoundedIcon /> </button>
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

            <footer>&copy; 2022. Built by Michel Pomerantzeff</footer>

        </div>
    )
}

export default Home;
