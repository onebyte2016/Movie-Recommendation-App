import { MovieDetails } from "@/interfaces/interfaces";

export const TMDB_CONFIG = {

BASE_URL: 'https://api.themoviedb.org/3',
API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
}
}
export const fetchMovies = async ({query}:{query: string}) => {
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });
    if(!response.ok){
        throw new Error('Failed to fetch movies', response.statusText)
    }
    const data = await response.json();
    return data.results;
    
}
export const fetchMovieDetails = async(movieId: string): Promise<MovieDetails>=>{
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        });
        if (!response.ok) throw new Error("Failed to fetch movie details")      
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
        throw Error;
        
    }
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmVmMDU5MzVhMzkxYWQ2NTEyYTAyODUxMzVlZDg1ZiIsIm5iZiI6MTc1NzE0ODIwMy40Mywic3ViIjoiNjhiYmY0MmI3ZTQxOTY1YjkxOTQ2ZTA1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.UcrGWIYg9Kq8S7DC9IvGCnRXgbatARhP6xK9K6hWZ74'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));