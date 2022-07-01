

<script>
    import {Icon, ArrowRight} from 'svelte-hero-icons'


    export let id = '';
    export let title = '' ;
    export let description = '';
    export let imgUrl = '';
</script>


<div class="movie_card">
    <img src={imgUrl} alt="movie_pic">
    <div class="details">
        <h4 class="title">{title}</h4>
        <h5 class="description">{description}</h5>
        <a href={`/movie/${id}`}>Details  <Icon src={ArrowRight} size={'1.2rem'}/> </a>
    </div>
    
</div>


<style>
    .movie_card{
        background-color: white;
        height: 30rem;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        
    }

    .movie_card img{
        width: 100%;
        object-fit: cover;
        object-position: center;
        overflow: hidden;
        flex: 1;
    }

    .details{
        padding: 1rem;
        overflow: hidden;
    }

    .title{
        margin-bottom: 0.5rem;
    }

    .description{
        font-weight: normal;
        max-lines: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .details a {
        display: flex;
        padding: 0.5rem 1rem;
        background-color: var(--text);
        color: var(--bg2);
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        width: 8rem;
        border-radius: 5rem;
        margin-top: 0.5rem;
    }


</style>