export function crearTemplate (listaMovies){
    let favo = JSON.parse(localStorage.getItem("favs")) || []
    console.log(favo)
    let template = "" 
    for (const movie of listaMovies) {
        template += createCard (movie,favo)
        console.log(favo)
    }  
    return template
}   


export function imprimirTemplate(lista, donde, fn) {
    let favo = JSON.parse(localStorage.getItem("favs")) || []
    let template = ""
    for (const elementoIterado of lista) {
        template += fn(elementoIterado,favo)
    }
    if( template ){
        donde.innerHTML = template
    }else{
        donde.innerHTML = `<h2 class="text-white"> No se encontraron resultados </h2> `
    }
}

export function createCard (movie, array){
 let imagen = "Recursos Moviestack/heartOff.svg"
 console.log(array)

    if (array.includes(movie.id)){
        imagen= "Recursos Moviestack/heartOn.svg"
    }
     let card= `<article class=" relative flex flex-wrap flex-col w-52 bg-white/10 rounded-md items-center p-2 pb-16 shadow-xl" data-id="card">
    <img src="https://moviestack.onrender.com/static/${movie.image}" alt="" class=" flex  w-48 h-fit object-cover rounded-md">
    <h3 class ="flex font-bold  text-amber-500 text-center"> ${movie.title}</h3>
    <h4 class ="flex font-semibold  text-white/80 text-center">${movie.tagline} </h4>
    <p class = " line-clamp-5  text-white/50 text-center"> ${movie.overview}</p>
    <a href="moviedetails.html?id=${movie.id}" class ="items-center flex flex-col p-2 bg-amber-500 font-semibold rounded-md mt-4 absolute bottom-2"> More info</a>
    <a href="#"  data-id="${movie.id}" >
    <span class="p-1 bg-black/60 absolute top-2 right-2 rounded-sm " data-boton="like "> 
    <img src="${imagen}" alt="" class="w-4" data-id="${movie.id}" data-boton="like"  >
     </span>
     </a> 
     </article> 
    `
    return card
}




export function crearSelector (genre){    
    for (const genero of genre){
       filtro.innerHTML+= `<option id="optionGenero" value="${genero}">${genero}</option>`
    }
}

export function filtrarPorGenero (listaPeliculas, generoSeleccionado){
    
    const filtro = listaPeliculas.filter(movie => movie.genres.includes(generoSeleccionado))

    if (generoSeleccionado == "All"){
        return listaPeliculas
    }
    else {
        return filtro
    }
    
}

export function filtrarPorNombre(lista, titulos) {
    const filtro = lista.filter(movie => movie.title.toLowerCase().startsWith(titulos.toLowerCase()))
    return filtro
}

export function filtrado (movies,genero,titulo,donde){
    const filtradoPorNombre = filtrarPorNombre(movies,titulo.value)
    const filtradoPorGenero = filtrarPorGenero(filtradoPorNombre,genero.value)
    const filtradoFinal = filtrarPorNombre(filtradoPorGenero,titulo.value)

    imprimirTemplate(filtradoFinal, donde, createCard)

}