import { createCard, imprimirTemplate, crearTemplate } from "./modules/funciones.js"


const url = "https://moviestack.onrender.com/api/movies"
const key = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const options = {

    headers: {
        'x-api-key': key
    }
}
let data

fetch(url, options)
    .then(response => response.json())
    .then(movies => {
        data = movies.movies
        const favsContenedor = document.getElementById('favsContenedor')

        let favo = JSON.parse(localStorage.getItem("favs")) || []
        let movieFavs = []
        favsContenedor.innerHTML += crearTemplate(movieFavs)

        for (const movies of data) {
            if (favo.includes(movies.id)) {
                movieFavs.push(movies)
            }
        }
        imprimirTemplate (movieFavs,favsContenedor,createCard)

    console.log(favo)


      
    .catch(err => console.log(err))


    favsContenedor.addEventListener('click', (event) => {
        const button = event.target.dataset.boton        
        let movieId = event.target.dataset.id
        let favo = JSON.parse(localStorage.getItem("favs")) || []
    
    
    
        if (button == "like") {
    
            //para sacar de favo
            if (favo.includes(movieId)) {
                favo.splice(favo.indexOf(movieId), 1)
                event.target.src = "Recursos Moviestack/heartOff.svg"
               
                // imprimirTemplate(movieFavs, favsContenedor, createCard)
                console.log(movieId)
                
    
    
            }
            //para meter en favo
            else {
                favo.push(movieId)        
                event.target.src = "Recursos Moviestack/heartOn.svg"            
                // imprimirTemplate(movieFavs, favsContenedor, createCard)
    
            }
            localStorage.setItem('favs', JSON.stringify(favs))
        }
    
    })

})