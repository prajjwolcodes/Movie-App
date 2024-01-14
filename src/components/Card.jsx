import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";


const Card = (props) => {
  const movies = props.movies
  const navigate = useNavigate("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  })
  return (
    <>
      <div>
        <div className="relative grid grid-cols-5 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          {movies.map(movie => {
            return (
              <>
                <div className="flex flex-col">
                  <div onClick={() => navigate("/movie/" + movie.id)} className="relative flex flex-col mx-4 mt-4 h-68 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 cursor-pointer hover:scale-110" key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between cursor-pointer">
                      <p className="block font-sans font-semibold leading-relaxed text-blue-gray-900 antialiased text-xl">
                        {movie.original_title}
                      </p>
                      <p className="block font-sans font-semibold leading-relaxed text-blue-gray-900 antialiased text-md">
                        {movie.vote_average.toFixed(1)} ⭐
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}

        </div>
      </div>
    </>
  );
};

export default Card;
