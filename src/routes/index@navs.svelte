
<script context="module">

    import {API_KEY} from '../constants'
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    // @ts-ignore
    export async function load({fetch}){
        let res = await fetch(url);
        let data = await res.json();
        console.log("This is the whole data of popular", data)
        if(res.ok){
            return {
                props : {
                    movies : data.results,
                    page : data.page,
                }
            }
        }
        
    }


    
</script>
    


<script>
// @ts-nocheck

    import CatNavs from "../components/CatNavs.svelte";
    import MovieCard from "../components/MovieCard.svelte"
    import {fly} from 'svelte/transition'


    export let movies = []

    export let page = 0;
   

    $ : movies = movies.map(movie => ({
        id : movie.id,
        img : `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
        title : movie.original_title,
        description : movie.overview
    }))


    const fetchMovies = async(type)=>{
        
        let url  = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`;
        let res = await fetch(url);
        let data = await res.json();

        console.log("this is the dat now", data)
        
    }

    $ : {
        fetchMovies("latest")
    }

</script>

<svelte:head>
    <title>Alka Movies - Popular</title>
</svelte:head>
<CatNavs/>
<div class="home" in:fly>
    <h1 class="movies_cat_title">Popular Movies</h1>
    <div>
        <h4>Page : {page}</h4>
    </div>
    <div class="movies_cont">
        {#each movies as  movie  (movie.id)}
            <MovieCard imgUrl = {movie.img} title={movie.title} description = {movie.description} id = {movie.id}/>
        {/each}

    </div>
    
</div>


<style>
    .home{
        width: 100%;
        padding: 1rem;
        background-color: var(--bg2);
    }

    .movies_cat_title{
        padding: 1rem 0rem;
        color: var(--text);
    }

    .movies_cont{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
        gap : 1.5rem;
        margin: auto;
    }


    @media (min-width : 768px){
        .movies_cont{
            grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
        }
    }
</style>

