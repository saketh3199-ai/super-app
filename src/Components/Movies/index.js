import { useEffect,useState,useContext } from "react"
import "./index.css"
import UserInfoContextObject from "../../context/AnyNameContext" 
import Movierow from "../Movierow"
import { Link,Redirect } from "react-router-dom"

const Movies = ()=>
{

    const {ListOfSelectedCategories} = useContext(UserInfoContextObject)

   

    const [curatedMoviesList,setMovieList] = useState([])





    //THIS BELOW EFFECT HOOK POPULATES THE CURATEDMOVIESLIST

    useEffect
    (
        ()=>
        {
            const fetchAllMovies = async ()=>
            {
                const resultMovies = await Promise.all
                (
                    ListOfSelectedCategories.map
                    (
                        async (SelectedCatObj)=>
                        {
                            let Genre = SelectedCatObj.SelectedCategoryTitle
                            let MovieApiUrl = `https://www.omdbapi.com/?s=${Genre}&type=movie&apikey=9e72c543`
                            let options = {method:'GET'}
                            let response = await fetch(MovieApiUrl,options)
                            let data = await response.json()
                            let {Search} = data
                            return {genre:Genre, movies:Search}
                        }
                    )
                )
                
                //STATE-BEING-MODIFIED INSIDE fetchAllMovies here
                setMovieList(resultMovies)
            }
            
            fetchAllMovies()
        },[]
    )

    //ENDS ABOVE ONE
   





     if (ListOfSelectedCategories.length<2)
    {
        return <Redirect to="/categories" />
    }


    
                


    const MoviesElement =
        <div className="movies-container">

                {/* ── HEADER ── */}
                <Link to="/" className="movies-header">
                    <h1 className="movies-app-name">Super app</h1>
                    <div className="movies-user-avatar">
                    <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=superapp" alt="User" className="movies-avatar-img"/>
                    </div>
                </Link>

                {/* ── PAGE TITLE ── */}
                <h2 className="movies-page-title">Entertainment according to your choice</h2>

                {/* ══════════════════════════════════════
                    CATEGORY: Action
                ══════════════════════════════════════ */}
                
                {
                    curatedMoviesList.map
                    (
                        (genreObject)=>
                        {
                            return <Movierow key={genreObject.genre} genreObject={genreObject}  />
                                        
                                    
                        }
                    )
                }
                

        </div>

    return MoviesElement
       



   
}

export default Movies