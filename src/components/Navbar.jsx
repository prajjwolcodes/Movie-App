import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchedMovie, setSearchedMovie] = useState("")
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
          <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <Link to="/"><a href="" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Movie Pasal</a></Link>
                <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.29 414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L1 293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a 414z" clipRule="evenodd" ></path>
                  </svg>
                </button>
              </div>
              <nav className="flex-col flex-grow hidden items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <div class="max-w-2xl mx-auto">
                  <form>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-3 h-3 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>

                      {/* INPUT SECTION   */}
                      <input onChange={(e) => { setSearchedMovie(e.target.value) }} type="search" id="default-search" class="block p-2 pl-10 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies, Series..." required />
                      <button onClick={() => navigate("/searchedMovie/" + searchedMovie)} type="submit" class="text-white absolute right-0 top-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Search</button>
                    </div>
                  </form>
                </div>
                <Link to="movies/popular">
                  <a className="px-4 py-2 mt-2 text-sm font-semibold bg-tr rounded-lg dark-mode:bg-transparent dark-mode:hover:bg dark-mode:focus:bg-gray-600 dark-mode:focus:t dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    Popular
                  </a>
                </Link>
                <Link to="movies/top_rated">
                  <a className="px-4 py-2 mt-2 text-sm font-semibold bg-tr rounded-lg dark-mode:bg-transparent dark-mode:hover:bg dark-mode:focus:bg-gray-600 dark-mode:focus:t dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  >
                    Top-Rated
                  </a>
                </Link >
                <Link to="movies/upcoming">
                  <a
                    className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  >
                    Upcoming
                  </a>
                </Link >
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



