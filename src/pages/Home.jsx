import Moviecard from "../components/Moviecard"
import { useState, useEffect } from "react"
import { getSearchMovie,getPopularMovie } from "../services/api";
import "../css/Home.css"
function Home(){

    const [searchQuery,setSearchQuery] =useState("");
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
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search Movies" className="search-input"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value) }
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {err && <div className="error-msg">{err}</div>}

            {loading ? (<div className="Loading...">loading</div>) :
             (<div className="movie-grid">
                {movies.map((movie) =>(
                    movie.title.toLowerCase().startsWith(searchQuery) && 
                    <Moviecard movie={movie} key={movie.id}/>  
                    ))}
            </div>)
            }
            
        </div>
      
    )
}
export default Home