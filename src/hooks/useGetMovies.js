import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useGetMovies = (title) => {

    const [data, setdata] = useState()
    const [movies, setmovies] = useState([])
    const [results, setResults] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const BASE_URL = "https://www.omdbapi.com/?apikey=1b351e8d&s="

    useEffect(() => {
        const unsub = () => {
            const QUERY = BASE_URL.concat(title)
            axios.get(QUERY)
                .then(
                    (response) => {
                        setLoading(true)
                        setmovies(response.data.Search)
                        setResults(response.data.totalResults)
                        // console.log(movies)
                        // console.log(results)
                        console.log(response.data.Search)
                        console.log(response.data.totalResults)
                    }
                    , (err) => {
                        setError(err.message)
                        console.log(err.message)
                    })
        }
            unsub()
    }, [title])

    return { movies, results, loading, error }
}
