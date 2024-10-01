import MoviesList from './Components/MoviesList';
import useFetch from './Components/useFetch';

function App() {

  const BASE_URL = 'http://www.omdbapi.com/?s=thor&apikey=b7ca393f'
  const {moviesList} =useFetch(BASE_URL)

  return (
    <div>
      <MoviesList list={moviesList}/>
    </div>
  )
}

export default App
