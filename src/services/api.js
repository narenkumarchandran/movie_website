const API_KEY="5d569482387d7f4de5ed75ac0438918f"

export const getPopularMovie= async ()=> {
    const response=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data=await response.json();
    return data.results;
};


export const getSearchMovie= async (query)=> {
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data=await response.json();
    return data.results;
};