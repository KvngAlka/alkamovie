
<script context="module">

    import {API_KEY} from '../constants'
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    // @ts-ignore
    export async function load({fetch}){
        let res = await fetch(url);
        let data = await res.json();

        if(res.ok){
            return {
                props : {
                    movies : data.results
                }
            }
        }
        
    }
</script>
    


<script>
// @ts-nocheck

    import CatNavs from "../components/CatNavs.svelte";
    import MovieCard from "../components/MovieCard.svelte"


    export let movies = []
   

    $ : movies = movies.map(movie => ({
        id : movie.id,
        img : `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
        title : movie.original_title,
        description : movie.overview
    }))

    // let url = `https://image.cnbcfm.com/api/v1/image/105773423-1551716977818rtx6p9yw.jpg?v=1551717428`
    // $ : movies = [
    //     {
    //         id : 43423,
    //         img : url, 
    //         title : "original Title",
    //         description : 'This is the movie description uv been waiting for'
    //     },
    //     {
    //         id : 43422,
    //         img : url, 
    //         title : "original Title",
    //         description : 'This is the movie description uv been waiting for'
    //     },
    //     {
    //         id : 43427,
    //         img : url, 
    //         title : "original Title",
    //         description : 'This is the movie description uv been waiting for'
    //     },
    //     {
    //         id : 434277,
    //         img : url, 
    //         title : "original Title",
    //         description : 'This is the movie description uv been waiting for'
    //     },
    //     {
    //         id : 4342756,
    //         img : url, 
    //         title : "original Title",
    //         description : 'This is the movie description uv been waiting for'
    //     },
    //     {
    //         id : 434278,
    //         img : url, 
    //         title : "original Title",
    //         description : 'This is the movie description uv been waiting for'
    //     },
    //     {
    //         id : 43427234,
    //         img : url, 
    //         title : "original Title",
    //         description : 'This is the movie description uv been waiting for'
    //     },
    // ]
</script>

<CatNavs/>
<div class="home">
    <h1 class="movies_cat_title">Popular Movies</h1>
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
    }

    .movies_cat_title{
        padding: 1rem 0rem;
    }

    .movies_cont{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(350px, 1fr));
        gap : 1.5rem
    }
</style>

