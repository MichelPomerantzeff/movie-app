import { Link } from "react-router-dom"

import "./css/Topbar.css"

function Topbar() {
    return (
        <div className="header" >

            <ul className="selectors">
                <li>
                    <Link className="topbarLinks" to="/movie-app">
                        Home
                    </Link>
                </li>

                <li>
                    <Link className="topbarLinks" to="/movie-app/watchlist">
                        Watch List
                    </Link>
                </li>

                <li>
                    <Link className="topbarLinks" to="/movie-app/watched">
                        Watched
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Topbar