import { writable } from "svelte/store";


const dataContext = writable({
    theme : 'light',
    user : null,
    movies : []
})

export {dataContext}