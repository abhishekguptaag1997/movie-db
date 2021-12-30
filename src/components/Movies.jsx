import React from 'react'

const Movies = ({ allMovies }) => {
    console.log(allMovies)
    return (
        <div>
            <div className="ccontainer" style={{ display: "grid" }}>
                {
                    allMovies && allMovies.map((movie)=>{
                        return(<>
                        <h3>{movie.Title}</h3>
                        </>)
                    })
                }
            </div>
        </div>
    )
}

export default Movies
