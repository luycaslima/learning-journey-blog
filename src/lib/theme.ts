import { browser } from "$app/environment"
import { writable } from "svelte/store"


type Theme = 'dark' | 'light'

const userTheme = browser && localStorage.getItem('color-scheme')

export const theme = writable(userTheme ?? 'light')


export function toggleTheme(){
    theme.update((currentTheme) =>{
        const newTheme = currentTheme === 'dark' ? 'light': 'dark'

        if(newTheme === 'dark'){
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-scheme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-scheme','light')
        }
        return newTheme
    })
}

export function setTheme(newTheme : Theme){
    theme.set(newTheme)
}