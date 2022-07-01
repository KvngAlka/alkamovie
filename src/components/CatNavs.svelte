<script>
    import {base} from '$app/paths'
    let catNavObjs = [
        {title : 'Popular Movies', url : ''},
        {title : 'Latest Movies', url : ''},
        {title : 'Movies', url : ''},
        {title : "Top Rated"}
    ]

    export let isActive = false;
    console.log(base)
</script>



<div class="cat_navs">
    <div class="cat_navs_cont">
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
        height: 4rem;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 0.1rem solid var(--black10);
        border-bottom: 0.1rem solid var(--black10);
        position: sticky;
        top: 4rem;
        z-index: 9;
    }

    .cat_navs_cont{
        display: flex;
        position: relative;
        height: 100%;
        gap: 1rem;
    }

    .cat_navs_cont h4{
        font-weight: normal;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        cursor: pointer;
    }
    
    .cat_navs .active{
        font-weight: bold;
    }
</style>