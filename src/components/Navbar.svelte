
<script>
    import { Icon, Search, Bell} from "svelte-hero-icons";
    import {goto} from '$app/navigation'

    let searchValue = '';
    let imgUrl = `https://image.cnbcfm.com/api/v1/image/105773423-1551716977818rtx6p9yw.jpg?v=1551717428`


    const handleSearch = ()=> goto(`/search/${searchValue}`)
</script>


<div class="navbar">
    <div class="search_cont">
        <div class="search_field">
            <input bind:value={searchValue} type="text"  on:submit={handleSearch} placeholder="Search movie...">
            <div class="search_btn" on:click={handleSearch}><Icon  src = {Search} size = {"1.2rem"} /></div>
        </div>
    </div>
    <div class="profile_cont">
        <div class="bell_cont" title="Notification"><Icon src = {Bell} size = {"1.2rem"}  /></div>
        <img src={imgUrl} alt="profile pic">
    </div>
</div>



<style>
    .navbar{
        width: 100%;
        height: 4rem;
        background-color: white;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 10;
        /* box-shadow:  0 10px 20px -7px rgba(0, 0, 0, 0.07); */
    }   

    

    .search_cont{
        flex: 1;
        display: grid;
        place-items: center;
    }

    .search_field{
        display: flex;
        align-items: center;
    }

    .search_field input{
        flex: 1;
    }

    .search_btn{
        cursor: pointer;
    }

    .profile_cont{
        padding: 0 20px;
        display: flex;
        align-items: center;
        gap: 1rem;

    }
    .bell_cont{
        cursor: pointer;
    }

    .profile_cont img{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 1.5rem;
        object-fit: cover;
        overflow: hidden;
    }

</style>