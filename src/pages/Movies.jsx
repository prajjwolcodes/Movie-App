import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import API from '../http/http'

const Movies = () => {
    const { type } = useParams()
    const [foundMovies, setFoundMovies] = useState([])
    async function fetchMovies() {
        const res = await API.get(`/movie/${type}?api_key=a9709b2cf0a8b2e52b677c5744659727&language=en-US`)
        setFoundMovies(res.data.results);
    }
    useEffect(() => {
        fetchMovies()
    }, [type])
    return (
        <div>
            <Card movies={foundMovies} />
        </div>
    )
}

export default Movies