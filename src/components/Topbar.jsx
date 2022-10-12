import { Link, useNavigate } from "react-router-dom"
import "../css/Topbar.css"
import { GlobalContext } from "../context/GlobalState";
import { useContext, useEffect, useState } from "react";


function Topbar() {

    const navigate = useNavigate()

    const { watchlist, watched } = useContext(GlobalContext)

    const [watchlistNumber, setWacthlistNumber] = useState(0)
    const [watchedNumber, setWatchedNumber] = useState(0)

    useEffect(() => {
        let watchlistQnt = 0
        watchlist.map(() => {
            watchlistQnt++
        })
        setWacthlistNumber(watchlistQnt)
    }, [watchlist])

    useEffect(() => {
        let watchedQnt = 0
        watched.map(() => {
            watchedQnt++
        })
        setWatchedNumber(watchedQnt)
    }, [watched])


    return (
        <div className="header" >

            <div className="selectors">
                <div onClick={() => navigate('/')} className="topbarLinks">
                    <h4>Home</h4>
                </div>

                <div onClick={() => navigate('/watchlist')} className="topbarLinks">
                    <div className="watchlist">
                        <h4>Watchlist</h4>
                        {watchlistNumber > 0 && <div className="badge">{watchlistNumber}</div>}
                    </div>
                </div>

                <div onClick={() => navigate('/watched')} className="topbarLinks">
                    <div className="watched">
                        <h4>Watched </h4>
                        {watchedNumber > 0 && <div className="badge">{watchedNumber}</div>}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Topbar