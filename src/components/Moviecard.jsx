import "../css/Moviecard.css"

function Moviecard({movie}){
    
    function onFavoriteClick(){
        alert("Add to Favorite")
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                <div className="movie-overlay">
                    <button className="fav-btn" onClick={onFavoriteClick}>❤︎</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-des">
                    <span class="rating"><i>★ </i>{Math.round(movie.vote_average*10)/10}</span>
                    <p>{movie.release_date.split('-')[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default Moviecard