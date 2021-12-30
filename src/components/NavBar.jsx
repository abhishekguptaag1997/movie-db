import React, { useState } from 'react'
import icon from "../video-player.png"
import searchIcon from "../loupe.png"

const NavBar = ({ setTitle }) => {
    const [search, setSearch] = useState()
    const clickHandler = () => {
        if (search) {
            console.log(search)
            setTitle(search)
        }else{
            console.log("try again")
        }

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={icon} style={{ width: "3rem" }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ margin: "0 25vw" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" id='search_bar' type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} />
                            <button className="btn btn-sm" type="submit" onClick={(e) => { e.preventDefault();clickHandler() }}><img src={searchIcon} alt="searchIcon" style={{ width: "2rem" }} /></button>
                        </form>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
