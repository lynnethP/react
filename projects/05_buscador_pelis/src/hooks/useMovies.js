import responseMovies from '../mocks/with-result.json'
//import withoutResult from '../mocks/no-result.json' 

export function useMovies() {
    const movies = responseMovies.Search
    //console.log(movies)
    const mappedMovies = movies?.map(movies => ({
        id: movies.imdbID,
        title: movies.Title,
        year: movies.Year,
        image: movies.Poster
    }))
    return {
        movies: mappedMovies
    }
}