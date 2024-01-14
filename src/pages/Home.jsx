import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [randomMovies, setRandomMovies] = useState([])

  async function fetchMovie() {
    const res = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=a9709b2cf0a8b2e52b677c5744659727");
    setRandomMovies(res.data.results);
  }
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      <Card movies={randomMovies} />
    </div>
  );
};

export default Home;
