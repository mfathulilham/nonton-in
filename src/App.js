import React, { useEffect, useState} from "react";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c945d77d54f2b9de43736683a4f3ef6b&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=c945d77d54f2b9de43736683a4f3ef6b&query=';

function App() {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(FEATURED_API)
        .then(res => res.json())
        .then(data => {
          console.log(data);          
          setMovies(data.results);
        });
    }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row g-3">
          { movies.length > 0 && movies.map((movie) =>
            <Movie key={movie.id} {...movie} />)
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;