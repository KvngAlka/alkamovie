<script context="module">
    import {API_KEY} from '../../constants'
// @ts-nocheck

    
    export async function load({fetch,params}){
        const id = params.id;
        const  url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
        const res = await fetch(url).catch(err=> console.log(err));
        const data = await res.json().catch(err => console.log("Error Fetching Data"));
        console.log(data)

        if(res.ok){
            return {
                props : {
                    movieDetails : data
                } 
            }
        }

        
    }
</script>


<script>
// @ts-nocheck

    import SideNavbar from "../../components/SideNavbar.svelte";
    import {Icon , Play} from 'svelte-hero-icons'
    import {fade, scale} from 'svelte/transition'

    export let movieDetails = {};


    let genres = movieDetails.genres ? movieDetails.genres : [];
    let productionCompanies = movieDetails.production_companies ? movieDetails.production_companies : []

</script>


<div class="movie_detail"  >
    <SideNavbar/>
    <div class="movie_detail_body" in:scale out:fade>
        
        <div class="movie_wall" style="background-image : url({`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`});
        background-repeat: no-repeat;background-size: cover;background-position: center;"> 
        </div>

        <div class="details">

            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="mv_pic">


            <div>

                <h4 class="title">{movieDetails.original_title}</h4>

                <div class="genres_cont">
                    {#each genres as genre (genre.id)}
                        <h4>{genre.name}</h4>
                    {/each}
                </div>

                <div class="watch_cont">
                    <button>
                        Watch <Icon src={Play} size = "1.2rem" />
                    </button>
                </div>

                <div class="story_line">
                    <h5 class="s_title">Story Line</h5>
                    <h5 class="s_body">
                        {movieDetails.overview}
                    </h5>
                </div>
            </div>


            <div class="companies">
                <h4 class="c_title">Production companies</h4>
                {#each productionCompanies as productionCompany}
                    <div class="company_tile">
                        <img src={"https://image.tmdb.org/t/p/w500"+productionCompany.logo_path} alt="">
                        <div>
                            <h4 class="c_name">{productionCompany.name}</h4>
                            <h4 class="c_country">country <div style="width: 0.4rem;height: 0.4rem; border-radius :50%;background : var(--black);"></div>
                                <span>{productionCompany.origin_country}</span>
                            </h4>
                        </div>
                    </div>
                {/each}

            </div>

        </div>

    </div>
</div>


<style>
    .movie_detail{
        display: flex;
        flex-direction: column;
        background-color: var(--bg1);
    }

    .movie_detail_body{
        flex: 1;
        object-position: bottom;
    }

    .movie_detail_body .movie_wall{
        width: 100%;
        height: 40vh;
        background-repeat: no-repeat;
        
        
        border-radius: 0 0 0 3rem;
    }

    .details{
        display: grid;
        grid-template-columns: 1fr;
        padding: 3rem 1rem;
        gap: 1rem;
        color: var(--text);
    }

    .details img{
        width: 20rem;
        height: auto;
        object-fit: cover;
    }

    .title{
        font-size: 2rem;
        font-weight: bold;
    }

    .genres_cont{
        display: flex;
        gap: 0.5rem;
        padding: 1rem 0;
        
    }

    .genres_cont h4{
        padding: 0.5rem 1rem;
        font-weight: normal;
        border: 0.1rem solid var(--text);
        color: var(--text);
        border-radius: 3rem;
    }

    .watch_cont{
        margin-top: 1rem;
    }

    .watch_cont button{
        width: 10rem;
        background-color: var(--bgPrimary);
        color: var(--white);
        padding: 1rem 2rem;
        border-radius: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }

    .story_line{
        padding: 2rem 0;
        max-width: 30rem;
    }

    .story_line .s_title{
        font-weight: bold;
        font-size: 1.5rem;
    }

    .story_line .s_body{
        font-weight: normal;
        font-size: 1rem;
    }

    .company_tile{
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .company_tile img{
        width: 4rem;
        height: auto;
        object-fit: contain;
    }

    .c_name{
        font-size: 1.2rem;
    }
    .c_country{
        font-weight: normal;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .c_country span{font-weight: bold;}


    @media (min-width: 768px){
        .movie_detail{
            flex-direction: row;
        }

        .details{
            grid-template-columns: auto 1fr;
            padding: 4rem 2rem;
        }
    }

    @media (min-width : 1024px){
        .details {
            grid-template-columns: auto 1fr auto;
        }
    }

</style>