import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import API from '../http/http'

const SearchedMovie = () => {
    const { movie } = useParams()
    const [searchedMovie, setSearchedMovie] = useState([])
    async function fetchSearchedMovie() {
        const res = await API.get(`/search/movie?query=${movie}&api_key=a9709b2cf0a8b2e52b677c5744659727`)
        setSearchedMovie(res.data.results)
    }

    useEffect(() => {
        fetchSearchedMovie()
    },)
    return (
        <>
            <Card movies={searchedMovie} />
        </>
    )
}

export default SearchedMovie