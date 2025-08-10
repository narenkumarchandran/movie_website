    import "../css/Moviecard.css"
    import { useMovieContext } from "../context/MovieContext"
    function Moviecard({movie}){
        
        const { favorites,isFavorites,addFavoriteMovie,removeFavoriteMovie} = useMovieContext() 

        const favorite=isFavorites(movie.id) 

        function onFavoriteClick(e){
            e.preventDefault()
            if(favorite){
                removeFavoriteMovie(movie.id)
            }
            else{
                addFavoriteMovie(movie) 
            }
        }

        return(
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                    <div className="movie-overlay">
                        <button className={`fav-btn ${favorite ? "active"  : ""}`}  onClick={onFavoriteClick}>❤︎</button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <div className="movie-des">
                        <span className="rating"><i>★ </i>{Math.round(movie.vote_average*10)/10}</span>
                        <p>{movie.release_date.split('-')[0]}</p>
                    </div>
                </div> 
            </div>
        )
    }
    
    export default Moviecard