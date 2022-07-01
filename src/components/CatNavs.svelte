<script>
    import {Icon, ChevronDown, ChevronUp} from 'svelte-hero-icons'
    let catNavObjs = [
        {title : 'Popular Movies', url : ''},
        {title : 'Latest Movies', url : ''},
        {title : 'Movies', url : ''},
        {title : "Top Rated"}
    ]

    export let isActive = false;

    let catNavActive = false;

</script>



<div class="cat_navs ">
    <div class="cat_toggler" on:click={()=> catNavActive = !catNavActive}>
        <Icon src={!catNavActive ? ChevronDown : ChevronUp } size="1.2rem"/>
    </div>
    <div class="cat_navs_cont {catNavActive && 'cat_navs_cont_active'} ">
        {#each catNavObjs as catNavObj }
            <h4 class="{isActive ? 'active' : ''}">
                {catNavObj.title}
            </h4>
        {/each}
    </div>
</div>


<style>
    .cat_navs{
        width: 100%;
        height: auto;
        overflow: hidden;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        border-bottom: 0.1rem solid var(--black10);
        position: sticky;
        top: 8rem;
        z-index: 8;
        transition: ease 0.3s;
        -webkit-transition: ease 0.3s;
    }

    

    .cat_toggler{
        width: 100%;
        background-color: var(--bg1);
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .cat_navs_cont{
        display: flex;
        flex-direction: column;
        position: relative;
        height: 0px;
        gap: 0.6rem;
        overflow: hidden;
        transition:  ease 0.3s;
        -webkit-transition: ease 0.3s;
    }

    .cat_navs_cont_active{
        height: 12rem;
        transition: ease 0.3s;
        -webkit-transition: ease 0.3s;
    }

    .cat_navs_cont h4{
        font-weight: normal;
        height: 100%;
        width: 100%;
        display: flex;
        text-align: start;
        padding: 0.3rem;
        cursor: pointer;
    }

    .cat_navs_cont h4:hover{
        background-color: var(--black10);
    }
    
    .cat_navs .active{
        font-weight: bold;
    }

    @media (min-width : 768px){
        .cat_navs{
            top: 4rem;
            height: 4rem;
        }

        .cat_navs_cont{
            flex-direction: row;
            height: 4rem;
        }

        .cat_navs_cont_active{
            height: auto;
            transition: ease 0.3s;
            -webkit-transition: ease 0.3s;
        }

        .cat_navs_cont h4{
            padding: 1rem;
            justify-content: center;
        }

        .cat_toggler{
            display: none;
        }
    }
</style>