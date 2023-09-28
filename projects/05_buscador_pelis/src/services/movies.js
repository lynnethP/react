const API_KEY = '9dd0c8ff'

export const searchMovies = async ({ search }) => {
    if (search == '') return null

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search
        console.log(movies)
        return movies?.map(movies => ({
            id: movies.imdbID,
            title: movies.Title,
            year: movies.Year,
            image: movies.Poster
        }))
    } catch (e) {
        throw new Error('Error searching movies')
    }

}