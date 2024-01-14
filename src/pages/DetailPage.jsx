import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../http/http'

const DetailPage = () => {
    const { id } = useParams()
    const [selectedMovie, setSelectedMovie] = useState([])
    async function fetchSelectedMovie() {
        const res = await API.get(`/movie/${id}?api_key=a9709b2cf0a8b2e52b677c5744659727&language=en-US`)
        setSelectedMovie(res.data);
    }
    useEffect(() => {
        fetchSelectedMovie()
    }, [])


    return (
        <div>
            <div className="h-screen grid place-items-center font-mono bg-gray-800">
                <div className="h-[600px] p-12 rounded-md bg-gray-700 shadow-lg">
                    <div className="md:flex px-2 leading-none max-w-7xl">
                        <div className='flex-none'>
                            <img
                                src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
                                alt="pic"
                                className="h-[500px] w-[600px] rounded-md transform mr-7 border-4 border-gray-300 shadow-lg"
                            />
                        </div>

                        <div className="flex-col text-gray-300">

                            <p className="pt-4 ml-3 text-4xl font-bold">{selectedMovie.original_title} ({selectedMovie.release_date})</p>
                            <hr className="hr-text" data-content="" />
                            <div className="text-md flex justify-between px-4 my-2">
                                <span className="font-bold">
                                </span>
                            </div>
                            <p className="hidden md:block px-4 my-4 text-xl text-left">{selectedMovie.overview} </p>

                            <p className="flex text-xl px-4 my-2">
                                {selectedMovie.vote_average}/10 ⭐
                            </p>

                            <div className="text-xl">
                                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">{selectedMovie.status}</button>
                                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">{selectedMovie.original_language}</button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default DetailPage