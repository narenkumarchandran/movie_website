import { createContext,useState,useEffect, useContext} from "react";

const MovieContext=createContext();

export const useMovieContext=()=> useContext(MovieContext);

export const MovieProvider=({children})=>{
    const [favorites,setfavourites]=useState([])

        useEffect(()=>{
            const storedFavorites=localStorage.getItem("favorites")

            if(storedFavorites) {
                setfavourites(JSON.parse(storedFavorites))
            }
        },[])
        
        useEffect(()=>{
             localStorage.setItem('favorites',JSON.stringify(favorites))
        },[favorites])
        
        const addFavoriteMovie=(movie)=>{
            setfavourites(prev=>[...prev,movie])
        }

        const removeFavoriteMovie=(movieId)=>{
            setfavourites(prev=>prev.filter(movie=>movie.id!==movieId))
        }

        const isFavorites=(movieId)=>{
            return favorites.some(movie=>movie.id===movieId)
        }

        const value={
            favorites,
            addFavoriteMovie, 
            removeFavoriteMovie,
            isFavorites
        }
        console.log(favorites.length);
        return <MovieContext.Provider value={value}>
            {children} 
        </MovieContext.Provider>
}