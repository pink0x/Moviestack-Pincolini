import { movies } from "./data.js"
console.log(movies)
const search = location.search

const params = new URLSearchParams(search)

const id= params.get ('id')

const pelicula = movies.find(movie => movie.id == id )

const imagen = document.getElementById ('imagen')

const titulo = document.getElementById ('titulo')

const subtitulo =document.getElementById ('subtitulo')

const generos = document.getElementById ('generos')

const parrafo = document.getElementById ('parrafo')

const tablas = document.getElementById ('tablas')

imagen.innerHTML= ` <img src=" ${pelicula.image} " alt="" class="rounded-md w-[50rem]">`

titulo.innerHTML= `${pelicula.title}`

subtitulo.innerHTML = `${pelicula.tagline}`

generos.innerHTML = `<b>Genres:</b> ${pelicula.genres}`

parrafo.innerHTML = `${pelicula.overview}`

tablas.innerHTML = `<table>
<tr>
    <td class="tabla1"> Original Language</td>
    <td class="tabla1">  ${pelicula.original_language}</td>
</tr>
<tr>
    <td>Release date</td>
    <td> ${pelicula.release_date} </td>
</tr>
<tr>
    <td class="tabla1">Run time</td>
    <td class="tabla1"> ${pelicula.runtime} </td>
</tr>
<tr>
    <td>Status</td>
    <td> ${pelicula.status} </td>
</tr>

</table>
<table>
<tr>
    <td>Vote average</td>
    <td> ${pelicula.vote_average} </td>
</tr>
<tr>
    <td>Budget</td>
    <td> ${pelicula.budget} </td>
</tr>
<tr>
    <td>Revenue</td>
    <td> ${pelicula.revenue} </td>
</tr>

</table>`
