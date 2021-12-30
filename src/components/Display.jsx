import React, { useEffect } from 'react'
import { useGetMovies } from '../hooks/useGetMovies'
import Movies from './Movies'


const Display = ({ title }) => {
   useEffect(() => {
      
   }, [])
    
        const { movies, results, loading, error } = useGetMovies(title)

    
    console.log(movies)

    return (
        <div>
            {movies &&
                <div className="container-fluid">
                    <div className="row"></div>
                    <div className="row">
                        <Movies allMovies={movies} />
                    </div>
                </div>
            }

        </div>
    )
}

export default Display
