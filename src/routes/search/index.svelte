
    
    
<script>
// @ts-nocheck
    import {slide} from 'svelte/transition'
    import {goto,} from '$app/navigation'
    import { Icon, Search, Bell, ArrowLeft} from "svelte-hero-icons";
    import Logo from "../../components/Logo.svelte";

// @ts-nocheck

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

<div class="search_index" in:slide out:slide>
    
    <div>
        <Icon src={Search} size={'3rem'} />
        <h4>Search for  movies here...</h4>
    </div>
    
</div>
    
    
    
<style>

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
        display: flex;
        align-items: center;
        gap: 1rem;
        position: sticky;
        padding: 2rem 1rem;
        top: 0;
        background-color: var(--bg1);
        z-index: 9;
    }
    /* .go_back{
        cursor: pointer;
    } */

    .search_field{
        display: flex;
        align-items: center;
        padding: 1rem;
        flex: 1;
        background-color: var(--bg2);
        border-radius: 1rem;
    }

    .search_field input{
        flex: 1;
        background: transparent;
        color: var(--text);
        
    }

    .search_btn{
        cursor: pointer;
        color: var(--text);
    }

    .search_index{
        display: grid;
        place-items: center;
        min-height: 40vh;
    }

    .search_index div{
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0.4;
    }

    .search_index div h4{
        font-weight: normal;
    }
</style>