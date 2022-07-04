<script context='module'>
// @ts-nocheck

    import {API_KEY} from '../../constants'
    
    // @ts-nocheck

    
    export async function load({fetch,params}){

        console.log("This is the params", params.id)
        const  url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${params.id}&page=1&include_adult=false`;
        const res = await fetch(url);
        const data = await res.json();

        if(res.ok){
            return {
                props : {
                    searchedMovies : data.results
                } 
            }
        }

        
    }
</script>


<script>
// @ts-nocheck

    import MovieCard from "../../components/MovieCard.svelte";
    import {slide} from 'svelte/transition'
    import {goto,} from '$app/navigation'
    import { Icon, Search, Bell, ArrowLeft} from "svelte-hero-icons";
    import Logo from "../../components/Logo.svelte";

// @ts-nocheck
    export  let searchedMovies = [];

    let searchValue = '';

    const handleSearch = ()=> goto(`/search/${searchValue}`)

</script>


<div class="search_top">
    <Logo/>
</div>

<div class="search_cont">
    <!-- <div class="go_back" on:click={()=> goto('/')}>
        <Icon src={ArrowLeft} size={'1.2rem'} />
    </div> -->
    <div class="search_field">
        <input bind:value={searchValue} type="text"  on:submit={handleSearch} placeholder="Search movie...">
        <div class="search_btn" on:click={handleSearch}><Icon  src = {Search} size = {"1.2rem"} /></div>
    </div>
</div>

<div in:slide out:slide>
    <div class="movies_cont">
        {#each searchedMovies as movie (movie.id) }
        <MovieCard  
        id = {movie.id}
        title = {movie.original_title} 
        description = {movie.overview}
        imgUrl = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
    {/each}
    </div>

    
</div>



<style>
    .movies_cont{
        padding: 3rem 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
        gap : 1.5rem;
        background-color: var(--bg2);
        margin: auto;
    }

    .search_top{
        width: 100%;
        height: 25vh;
        background-color: var(--bg1);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search_cont{
        flex: 1;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        position: sticky;
        padding: 1rem;
        top: 0;
        background-color: var(--bg1);
        z-index: 9;
    }
    /* .go_back{
        cursor: pointer;
        color: var(--text);
    } */

    .search_field{
        display: flex;
        align-items: center;
        padding: 1rem;
        flex: 1;
        background-color: var(--bg2);
        border-radius: 1rem;
        color: var(--text);
    }

    .search_field input{
        flex: 1;
        background: transparent;
        color: var(--text);
        
    }

    .search_btn{
        cursor: pointer;
    }



</style>