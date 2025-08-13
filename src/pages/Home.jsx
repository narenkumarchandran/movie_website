import Moviecard from "../components/Moviecard"
import { Link} from "react-router-dom";
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getSearchMovie,getPopularMovie, getGenreMovie } from "../services/api";
import "../css/home.css"
import "../css/NavBar.css"
function Home(){

    const [searchQuery,setSearchQuery] =useState("");
    const [genreQuery,setGenreQuey]=useState(null);
    const [movies,setMovies]=useState([]);
    const[err,setError]=useState(null);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        const loadPopularFunctions=async ()=>{
            try {
                const popularmovies=await getPopularMovie()
                setMovies(popularmovies)
            }
            catch (err) {
                console.log(err)
                setError("Failed to load movies....")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularFunctions();  
    },[])   


    useEffect(()=>{
        const loadGenreMovies= async()=>{
            if(genreQuery===null)return;

            try{
                setLoading(true);
                const genreResults =await getGenreMovie(genreQuery);
                setMovies(genreResults);
                setError(null);
            }catch(err){
                console.log(err);
                setError("Failed to load movies....")
            }
            finally{
                setLoading(false);
            }
        }

        loadGenreMovies();
    },[genreQuery]);
    
  const genres = [
    { id: 12, name: 'Adventure' },
    { id: 14, name: 'Fantasy' },
    { id: 16, name: 'Animation' },
    { id: 18, name: 'Drama' },
    { id: 27, name: 'Horror' },
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 9648, name: 'Mystery' },
    { id: 10402, name: 'Music' },
    { id: 37, name: 'Western' },
    { id: 53, name: 'Thriller' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 10752, name: 'War' },
    { id: 36, name: 'History' },
  ];

    const handleSearch = async (e)=>{
        e.preventDefault()
        if(!searchQuery.trim())return
        if(loading)return

        setLoading(true)
        try{
            const searchResults= await getSearchMovie(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search movies....")
        }finally{
            setLoading(false)
        } 
        
    };


    return(
    
        <div className="home">
            <header>
                <div className="left-content">
                    <a href="/">🎬NkMovies</a> 
                </div>
                <form onSubmit={handleSearch} className="search-form">
                    <input type="text" placeholder="Search any Movies..." className="search-input"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value) }
                    />
                    <button type="submit" className="search-button">🔍︎</button>
                </form>
                <div className="rigth-content">
                    <Link to="/">Home</Link> 
                    <Link to="/favorites">Favorites</Link>
                </div>
            </header>
            <div className="fullmovie-list">
                <div className="Genre-list">
                    <h2 className="sidebar-title">Genre</h2>
                    <div className="genres">
                       {genres.map((genre)=>(
                                <a href="#" onClick={()=>setGenreQuey(genre.id)}>
                                    {genre.name}
                                </a>
                       ))}
                    </div>
                </div>
                <div className="movie-list">
                        <h1>{genreQuery===null ?"Popular Movies":`All ${genres.find(g => g.id === genreQuery)?.name} Movies`}</h1>
                    {err && <div className="error-msg">{err}</div>}

                    {loading ? (
                            <div className="movie-grid">
                                {Array(8) // Show 8 placeholders
                                .fill()
                                .map((_, index) => (
                                    <Skeleton height={300} borderRadius={10} baseColor="#243624ff"/>
                                ))}
                            </div>):
                    (<div className="movie-grid">
                        {movies.length==0 ? (<div className="no-data">No film data</div>)
                            :(
                                movies.filter((movie)=>movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
                                .map((movie) =>(
                                <Moviecard movie={movie} key={movie.id} />  
                            )))}
                    </div>)
                    }
                </div>
            </div>
           
            
        </div>
      
    )
}
export default Home