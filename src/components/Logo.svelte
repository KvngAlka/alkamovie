
<script>
    export let size = 0;
    import {goto} from '$app/navigation'
</script>


<div class="logo" on:click={()=>goto('/')} width = {`${size}rem`} height = {`${size}rem`} style="boder-radius : {size/5}">
    <h1>A</h1>
</div>

<style>
    .logo{
        background-color: white;
        color: black;
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
        display: grid;
        place-items: center;
        border: 0.1rem solid black;
        cursor: pointer;
    }
</style>
