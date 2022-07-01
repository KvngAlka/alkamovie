
<script>
    export let size = '';
    import {goto} from '$app/navigation'
</script>


<div class="logo" on:click={()=>goto('/')}  height = {size ? `${size}rem` : '3rem'} style="boder-radius : {10}; width : {size ? `${size}rem` : '3rem'};height : {size ? `${size}rem` : '3rem'}">
    <h1>A</h1>
</div>

<style>
    .logo{
        background-color: white;
        color: black;
        border-radius: 0.5rem;
        display: grid;
        place-items: center;
        border: 0.1rem solid black;
        cursor: pointer;
    }

    .logo h1{
        font-size: 1rem;
    }
</style>
