<script>
import Navbar from "../components/Navbar.svelte";
import SideNavbar from "../components/SideNavbar.svelte";

</script>

<div class="layout">
    <SideNavbar/>
    <div class="body">
        <Navbar/>
        <slot></slot>
    </div>
</div>


<style>
    .layout{
        position: relative;
        display: grid;
        background-color: rgb(240, 240, 240);
        grid-template-columns:1fr ;
    }

    .body{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
    }



    @media (min-width : 768px){
        .layout{
            grid-template-columns: auto 1fr;
        }
    }

</style>
