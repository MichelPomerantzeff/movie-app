import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faVideoCamera } from "@fortawesome/free-solid-svg-icons"
import "../css/SearchField.css"

function SearchField(props) {
    return (
        <div className="body" >
            <div className="content">

                <div className="appTitle">
                    <FontAwesomeIcon className="videoCamera" icon={faVideoCamera} />
                    <FontAwesomeIcon className="shadow" icon={faVideoCamera} />
                    <span>Movie App</span>
                </div>

                <div className="searchBar">
                    <input onChange={props.handleSearch} className="field" type="text" name="search" id="search" placeholder="Search" />
                    <FontAwesomeIcon onClick={props.searchMovie} className="magnifyingGlass" icon={faMagnifyingGlass} />
                </div>

            </div>
        </div>
    )
}

export default SearchField