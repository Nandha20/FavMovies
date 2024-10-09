import { useEffect, useState } from "react";
import "./MoviesList.css";

const MoviesList = (props) => {
  const [favMovies, setFavMovies] = useState([]);
  const [showImage, setShowImage] = useState(true);


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Newitems"));
    if (items) {
      setFavMovies(items);
      localStorage.clear();
    }
  }, []);

  function handleSelect(newmovie) {
    setFavMovies((prevSelectedMovies) => {
      if (!prevSelectedMovies) {
        prevSelectedMovies = [];
      }
      if (
        prevSelectedMovies.some((fMovie) => fMovie.imdbID === newmovie.imdbID)
      )
        return prevSelectedMovies;
        localStorage.setItem("Newitems", JSON.stringify(prevSelectedMovies));
      return [newmovie, ...prevSelectedMovies];
      
    });
  }

  function handleDelete(deleteFav) {
    setFavMovies((prevSelectedMovies) => {
      if (!prevSelectedMovies) {
        prevSelectedMovies = [];
      }
      if (prevSelectedMovies) {
        const newFavMovies = prevSelectedMovies.filter(
          (fMovie) => fMovie.imdbID != deleteFav.imdbID
        );
        return [...newFavMovies];
      }

      console.log(prevSelectedMovies);
    });
  }

  function handleImageError() {
    setShowImage(false);
  }

  return (
    <div>
      <h2 className="movieListTitle">Choose Your Favourite Movies</h2>
      <div className="container">
        {props.list.map((movie) => (
          <div className="moviesscroll">
            <a onClick={() => handleSelect(movie)}>
              { showImage ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  key={movie.imdbID}
                  // onError={handleImageError}
                ></img>
              ) : (
                <img
                  alt={movie.Title}
                  key={movie.imdbID}
                ></img>
              )}
            </a>
          </div>
        ))}
      </div>
      <div className="inline-container">
        {favMovies.length == 0 ? (
          <h1 className="favMovieTitle">No Movies Added</h1>
        ) : (
          favMovies.map((selectedFavMovies) => (
            <div
              className="favmovielist"
              onClick={() => handleDelete(selectedFavMovies)}
            >
              <img
                src={selectedFavMovies.Poster}
                alt={selectedFavMovies.Title}
                key={selectedFavMovies.imdbID}
              ></img>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MoviesList;
