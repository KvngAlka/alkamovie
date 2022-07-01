<script>
    import {  Home,Search,  Moon, Sun, QuestionMarkCircle} from "svelte-hero-icons";
    import Logo from "./Logo.svelte";
    import SideNavTile from "./SideNavTile.svelte";
    


    let isDarkTheme = false;
    const toggleTheme = ()=> isDarkTheme = !isDarkTheme;
</script>



<div class="side_navbar">
    <div class="top">
        <Logo />
    </div>

    <div class="body">
        <SideNavTile IconName = {Home} isNavActive title = 'Home' linkUrl = '/'/>
        <SideNavTile IconName = {Search} title = 'Search' linkUrl = '/search' />
        <SideNavTile IconName = { !isDarkTheme ? Moon : Sun}  callBack = {toggleTheme} title = 'Change Theme' />
        <SideNavTile IconName = {QuestionMarkCircle} linkUrl = {'/about'} />
    </div>
    
</div>


<style>
    .side_navbar{
        width: 6rem;
        height: 100vh;
        position: sticky;
        top: 0;
        background-color: var(--bgPrimary);
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        color: var(--white);
    }

    .top{
        width: 100%;
        height: auto;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
    }

    .body{
        margin-top: 2rem;
    }
</style>