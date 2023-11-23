
const url = "https://moviestack.onrender.com/api/movies"
const key = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const options = {
    headers: {
        'x-api-key': key
    }
}


const {createApp} = Vue
const optionsVue = {
        data (){
             return {
                movies:"",
                name:"",
                generos:[],
                movie:{},
                genre:"", //resolver porque no me flatea esto !!!

                
             }
        },

        beforeCreate(){
                fetch (url, options)
              .then (response=> response.json())
              .then ( (parametro) =>{
                const searchId = location.search
                const paramsId = new URLSearchParams(searchId)
                const ID = paramsId.get('id')

                this.movies = parametro.movies
                this.generos = [...new Set (this.movies.map (movie=> movie.genres).flat())] 
                this.movie = this.movies.find(movie=>movie.id == ID) 
                this.genre = this.movie.genres.flat()//!!!!!
                
                
                
                
                
                console.log(this.genre)

              })             
              
              .catch (err => console.log(err))
        },
        
    
       
 }
          


 const app = createApp (optionsVue)
 app.mount('#app')
 




















// const imagen = document.getElementById('imagen')
// const titulo = document.getElementById('titulo')
// const subtitulo = document.getElementById('subtitulo')
// const generos = document.getElementById('generos')
// const parrafo = document.getElementById('parrafo')
// const tablas = document.getElementById('tablas')
// let movies

// fetch(url, options)
//     .then(response => response.json())
//     .then(data => {
//         movies = data.movies
//         let movie= movies.find(movie => movie.id == id)       



//         imagen.innerHTML = ` <img src="https://moviestack.onrender.com/static/${movie.image}" alt="" class="rounded-md w-[50rem]">`
//         titulo.innerHTML = `${movie.title}`
//         subtitulo.innerHTML = `${movie.tagline}`
//         generos.innerHTML = `<b>Genres:</b> ${movie.genres}`
//         parrafo.innerHTML = `${movie.overview}`
//         tablas.innerHTML = `<table>
// <tr>
//     <td class="tabla1"> Original Language</td>
//     <td class="tabla1">  ${movie.original_language}</td>
// </tr>
// <tr>
//     <td>Release date</td>
//     <td> ${movie.release_date} </td>
// </tr>
// <tr>
//     <td class="tabla1">Run time</td>
//     <td class="tabla1"> ${movie.runtime} </td>
// </tr>
// <tr>
//     <td>Status</td>
//     <td> ${movie.status} </td>
// </tr>

// </table>
// <table>
// <tr>
//     <td>Vote average</td>
//     <td> ${movie.vote_average} </td>
// </tr>
// <tr>
//     <td>Budget</td>
//     <td> ${movie.budget} </td>
// </tr>
// <tr>
//     <td>Revenue</td>
//     <td> ${movie.revenue} </td>
// </tr>

// </table>`
//     })
//     .catch(err => console.log(err))







 // computed:{
        //         filtrar () {
        //                 const filtro=  this.movies.filter(movie=>movie.title.toLowerCase().includes(this.search.toLowerCase()) 
        //                 && (this.genreSelected == "All" || movie.genres.includes(this.genreSelected)))
        //                 this.filtroFinal=filtro         
        //                },              
        // }            