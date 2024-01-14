import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import DetailPage from './pages/DetailPage'
import SearchedMovie from './pages/SearchedMovie'

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies/:type" element={<Movies />} />
          <Route path="movie/:id" element={<DetailPage />} />
          <Route path="searchedMovie/:movie" element={<SearchedMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App