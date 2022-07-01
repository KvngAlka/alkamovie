

<script>
import Logo from "../components/Logo.svelte";
import {slide, fade} from 'svelte/transition'

    let userData = {
        username : '',
        password : ''
    }

    const handleSubmit = ()=>{
        console.log("Username: ",userData.username);
        console.log("Password", userData.password)
    }


    $ : {
        document.title = "Alka Movies - Signin"
    }
</script>


<div class="signin" >
    
    <form action="" on:submit|preventDefault={handleSubmit} in:slide={{duration : 500}} out:fade>
        <div class="logo_cont">
            <Logo/>
        </div>
        <input bind:value={userData.username} type="text" placeholder="username">
        <input bind:value={userData.password} type="password" placeholder="password">
        <input type="submit" value="Login">
    </form>


</div>

<style>
    .signin{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--bg1);
    }

    .logo_cont{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    form{
        margin-top: 2rem;
        width: 100%;
        max-width: 30rem;
        background-color: var(--white);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        
    }

    form input{
        width: 100%;
        border-radius: 1rem;
        padding: 1rem;
        height: 5rem;
        background-color: var(--bg2);
        margin-top: 1rem;
    }

    form input:focus{
        border: 0.1rem solid var(--primaryColor);
    }


    form input[type = "submit"]{
        background-color: var(--bgPrimary);
        color: var(--white);
        cursor: pointer;
    }

    @media (min-width: 768px){
        .signin{
            background-color: var(--bg2);
        }

        form{
            border-radius: 1rem;
        }
    }



</style>