import {API_KEY} from './constants'

export const getLatestMovies = async(/** @type {string} */ type)=>{
    let url = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`
    const res = await fetch(url);
    const data = res.json();

    return data
}


export const getPopularMovies = async(/** @type {string} */ type)=>{
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const res = await fetch(url);
    const data = res.json();

    return data
}