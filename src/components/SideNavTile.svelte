<script>
    export /**
* @type {import("svelte-hero-icons").IconSource}
*/
     let IconName;
    import {Icon} from "svelte-hero-icons"

    export let isNavActive = false;
    export let title = '';
    export let linkUrl = '';
    export let callBack = ()=>{};
</script>



<div class="nav_tile {isNavActive ? 'nav_tile_active' : ''}" on:click={()=>callBack()} {title}>
    {#if linkUrl}
        <a href={`${linkUrl}`}><Icon src = {IconName} size = {"1.2rem"}/></a>
    {:else}
        <Icon src = {IconName} size = {"1.2rem"}/>
    {/if}
    
</div>


<style>
    .nav_tile{
        width: 100%;
        padding: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .nav_tile_active{
        border-bottom: 0.3rem solid var(--text);
        background-color: var(--text) 0.5;
    }
    .nav_tile a{
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        text-decoration: none;
        color: var(--text);
    }

    .nav_tile:hover{
        background-color: rgba(221, 221, 221, 0.315) ;
    }


    @media (min-width : 768px){
        .nav_tile_active{
            border-bottom: none;
            border-left: 0.3rem solid var(--text);
        }
    }

</style>