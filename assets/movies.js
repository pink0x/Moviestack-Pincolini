import {  crearSelector, crearTemplate, filtrado} from "./modules/funciones.js"

const url = "https://moviestack.onrender.com/api/movies"
const key = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const options = {

        headers:{
                'x-api-key': key
        }       
}
let data 

fetch (url, options)
      .then (response=> response.json())
      .then (movies => {
        data= movies.movies
        contenedor.innerHTML += crearTemplate (data)
        const generosSinFiltrar = data.map (data=> data.genres).flat()
        let generos = [...new Set (generosSinFiltrar)]
        generos.unshift ("All")      
        crearSelector(generos)
      })
      .catch (err => console.log(err))






let filtro = document.getElementById ('filtro')
let buscador = document.getElementById ('search')
const contenedor = document.getElementById ('contenedor')




filtro.addEventListener("input", () => {
        filtrado (data,filtro,buscador,contenedor)       
       
})


 buscador.addEventListener("input", () => {
   
        filtrado (data,filtro,buscador,contenedor)
            
})

let favs = JSON.parse(localStorage.getItem('favs')) || []

contenedor.addEventListener ('click',(event)=>{
        const button = event.target.dataset.boton
        let movieId = event.target.dataset.id

                 
        if (button == "like"){    
                       

         //para sacar de favs
          if (favs.includes(movieId)){               
                favs.splice(favs.indexOf(movieId),1)
                event.target.src = "Recursos Moviestack/heartOff.svg"
                console.log(favs)
                
            }
            //para meter en favs
            else {
                favs.push(movieId)
                console.log(favs)
                event.target.src = "Recursos Moviestack/heartOn.svg"
                
            }
            localStorage.setItem('favs', JSON.stringify(favs))
        }
                          
       })





   