import "./index.css"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import {useState} from 'react'


const Moviepopup = (props)=>
{

    const [DetailedMovieObject,setMovieObject] = useState({})

    const {movie} = props
    const {imdbID} = movie



    const callDetailedMovieApi = async()=>
    {
        const detailedMovieInfoApiUrl = `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=9e72c543`
        const options = {method:"GET"}
        const response = await fetch(detailedMovieInfoApiUrl,options)
        const data = await response.json()

        const {Title,Year,Runtime,Genre,imdbRating,Plot,Actors,Poster} = data
        setMovieObject({Title:Title,Year:Year,Runtime:Runtime,Genre:Genre,imdbRating:imdbRating,Plot:Plot,Actors:Actors,Poster:Poster})
    }





    const MoviepopupEl =
    <div className="popup-container">
	   <Popup modal onOpen={callDetailedMovieApi} trigger={<button type="button" className="trigger-button"><div className="movie-card"><img src={movie.Poster} alt={movie.Title} className="movie-poster"/></div></button>}>
			 {
                close =>
                (
                    <div className="popup-overlay">
                        <div className="popup-card">

                            {/* LEFT — Poster */}
                            <div className="popup-poster-wrapper">
                                <img src={DetailedMovieObject.Poster} alt={DetailedMovieObject.Title} className="popup-poster"/>
                            </div>

                            {/* RIGHT — Info */}
                            <div className="popup-info">

                                <h2 className="popup-title">{DetailedMovieObject.Title}</h2>

                                <div className="popup-meta-row">
                                    <span className="popup-badge">{DetailedMovieObject.Year}</span>
                                    <span className="popup-badge">{DetailedMovieObject.Runtime} min</span>
                                    <span className="popup-badge popup-rating">⭐ {DetailedMovieObject.imdbRating}/10</span>
                                </div>

                                <p className="popup-genre">{DetailedMovieObject.Genre}</p>

                                <p className="popup-plot">
                                    {DetailedMovieObject.Plot}
                                </p>

                                <div className="popup-cast-section">
                                    <span className="popup-cast-label">Cast</span>
                                    <p className="popup-cast">{DetailedMovieObject.Actors}</p>
                                </div>

                                <button className="popup-close-btn" onClick={close}>✕ Close</button>

                            </div>

                        </div>
                    </div>
                )
            }
	   </Popup>
	</div>


    return MoviepopupEl
}

export default Moviepopup