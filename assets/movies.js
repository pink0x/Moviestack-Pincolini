import { filtrarPorNombre, filtrarPorGenero, createCard, imprimirTemplate, crearSelector, crearTemplate } from "./modules/funciones.js"

import { movies } from "./data.js"



let filtro = document.getElementById ('filtro')
let buscador = document.getElementById ('search')
const contenedor = document.getElementById ('contenedor')
contenedor.innerHTML += crearTemplate (movies)   

const generosSinFiltrar = movies.map (movie=> movie.genres).flat()     
let generos = [...new Set (generosSinFiltrar)] 
generos.unshift ("All")
    
crearSelector(generos)

filtro.addEventListener("input", () => {
        const filtradoPorNombre = filtrarPorNombre(movies,buscador.value)   
        const filtradoPorGenero = filtrarPorGenero(filtradoPorNombre,filtro.value)
        const filtradoFinal = filtrarPorNombre(filtradoPorGenero,buscador.value)
        
 imprimirTemplate(filtradoFinal, contenedor, createCard)        
})
    
        
 buscador.addEventListener("input", () => {
            const filtradoPorNombre = filtrarPorNombre(movies,buscador.value)   
            const filtradoPorGenero = filtrarPorGenero(filtradoPorNombre,filtro.value)
            const filtradoFinal = filtrarPorNombre(filtradoPorGenero,buscador.value)
            
            imprimirTemplate(filtradoFinal, contenedor, createCard)
})
        
    

