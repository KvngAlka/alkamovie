<script>
    import {  Home,Search,  Moon, Sun, QuestionMarkCircle} from "svelte-hero-icons";
    import Logo from "./Logo.svelte";
    import SideNavTile from "./SideNavTile.svelte";
    


    let isDarkTheme = false;
    const toggleTheme = ()=> {
        isDarkTheme = !isDarkTheme
        document.querySelector('body')?.classList.toggle('dark')
    };

 
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
        width: 100%;
        height: 4rem;
        position: sticky;
        top: 0;
        background-color: var(--bg1);
        display: flex;
        gap: 0.4rem;
        color: var(--text);
        z-index: 10;
        border-bottom: 0.02rem solid var(--border);
        
    }

    .top{
        width: auto;
        height: 100%;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        display: none;
    }

    .body{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }


    @media (min-width : 768px){
        .side_navbar{
            width: 6rem;
            height: 100vh;
            position: sticky;
            top: 0;
            flex-direction: column;
            z-index: 10;

            border-right: 0.02rem solid var(--border);
            border-bottom: none;
        }
        .top{
            display: flex;
            width: 100%;
            height: auto;
        }

        .body{
            flex-direction: column;
            margin-top: 2rem;
        }
    }
</style>