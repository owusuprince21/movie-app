// import logo from './logo.svg';
// e7394d95
import './App.css';
import SearchIcon from './search.svg'
import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=e7394d95';

// const movie1 = {
//   "Title": "Spider-Man",
//   "Year": "2002",
//   "imdbID": "tt0145487",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovie = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovie("Spider Man");
  }, []);
  return (
    <div className='app'>
      <h1>PTECH MovieHouse</h1>
    <div className='search'>
      <input 
        placeholder='search movie'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src={SearchIcon} alt='search'
        onClick={() => searchMovie(searchTerm)}
      />
    </div>

    {movies?.length > 0
      ?(

    <div className='container'>
      {movies.map((movie) => (
        <MovieCard movie ={movie}/>
      ))}
    </div>
      ): (
        <div className='empty'>
          <h2>No movie found!</h2>
        </div>
      )}

    </div>
  
  );
}

export default App;
