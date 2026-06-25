import Moviepopup from "../Moviepopup"

const Movierow = (props)=>
{

    const {genreObject} = props

    const MovieRowElement = 
    <div className="movies-category-section">
                                            <h3 className="movies-category-title">{genreObject.genre}</h3>
                                            <div className="movies-cards-row">
                                            {
                                                genreObject.movies.map
                                                (
                                                    (movie)=>
                                                    {
                                                        return <Moviepopup key={movie.imdbID} movie={movie} movieDetailId = {movie.imdbID} />
                                                    
                                                    }
                                                )
                                            }
                                             </div>
        </div>


    return MovieRowElement
}

export default Movierow