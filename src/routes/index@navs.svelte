
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
    import { Icon , ChevronLeft, ChevronRight} from "svelte-hero-icons";


    export let movies = []

    export let page = 0;
    let pageNumber = 1;


    const fetchMovies = async(type)=>{
        
        let url  = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`;
        let res = await fetch(url);
        let data = await res.json();

        console.log("this is the dat now", data)
        
    }

    const fetchMovieWithPage = async(pageNumber)=>{
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`;
        let res = await fetch(url);
        let data = await res.json();
        if(data){
            movies = data.results;
            page = data.page;
        }
    }
   

    $ : movies = movies.map(movie => ({
        id : movie.id,
        img : `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
        title : movie.original_title,
        description : movie.overview
    }))


    

    

</script>

<svelte:head>
    <title>Alka Movies - Popular</title>
</svelte:head>

<CatNavs on:display_movies = {(title)=>fetchMovies(title)}/>
<div class="home" in:fly>
    <h1 class="movies_cat_title">Popular Movies</h1>
    <div class="page_control_cont">
        <h4>Page : {page}</h4>

        <div class="p_n">
            <input type="text" bind:value={pageNumber} name="" id="" placeholder="page number">
            <button on:click={()=>fetchMovieWithPage(pageNumber)}>Submit</button>
        </div>


        <div class="b_f">
            <div title="prev page" on:click={()=> page > 1 && fetchMovieWithPage(page - 1)}>
                <Icon src = {ChevronLeft} size = "1.2rem"/>
            </div>
            <div title="next page" on:click={()=> fetchMovieWithPage(page + 1)}>
                <Icon src = {ChevronRight} size = "1.2rem"/>
            </div>
        </div>
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

    .page_control_cont{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 0;
    }
    .b_f{
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .page_control_cont input{
        padding: .5rem;
        background-color: var(--bg1);
        color: var(--text);
    }

    .page_control_cont button{
        cursor: pointer;
        padding: 0 1rem;
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

        .page_control_cont{
            flex-direction: row;
            align-items: center;
        }
    }
</style>

