import "../css/favorites.css"
import { useMovieContext } from "../context/MovieContext"
import Moviecard from "../components/Moviecard"
import NavBar from "../components/NavBar";

function Favorites(){
    
    const {favorites}=useMovieContext();

    if (favorites.length!==0){
        return(
            <div className="favorites">
                <NavBar/>
                <h2>Your Favorites</h2>
                <div className="movie-grid">
                    {favorites.map((movie) =>(<Moviecard movie={movie} key={movie.id}/>))}
                </div>
            </div>
        )
    }
    return(
        <div className="favorites-empty">
            <a href="#">Back to home...</a>
            <h2>No Favorites Movies Yet</h2>
            <p>Start adding Movies to your favourites and they will appear here</p>
        </div>
    )
}
export default Favorites