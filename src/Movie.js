import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await(
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies)
  return (
    <div>
      {loading ? <h1>Loading....</h1> : 
        <div className="movie-wrap">
          {movies.map(v => <div className="movie-area" key={v.id}>
            <h2 className="movie-title">
              {v.title}
            </h2>
            <div className="movie-thumbnail">
              <img src={v.medium_cover_image} alt="" />
            </div>
            <ul className="movie-genre-list">
              {v.genres.map(g => {
                return <li 
                  className="movie-genre-item" key={g}
                  style={{listStyle:'none', fontWeight:'bold'}}
                >#{g}</li>
              })}
            </ul>
            <Link className="movie-details" to={`movie/${v.id}`}>상세보기</Link>
          </div>)}
        </div>
      }
      <div>
        <ul>
          
        </ul>
      </div>
    </div>
  );
}

export default Movie;
