import './App.css'
import responseMovies from './mocks/with-result.json'
//import withoutResult from './mocks/no-result.json'
import { Movies } from './components/Movies.jsx'

function App() {
  const movies = responseMovies.Search

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' action="">
          <input placeholder='Avengers, Star Wars, The Matix..' />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
