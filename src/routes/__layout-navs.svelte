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
        display: flex;
        background-color: rgb(240, 240, 240);
    }

    .body{
        width: 100%;
    }

</style>
