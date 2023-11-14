export function crearTemplate (listaMovies){
    let template = "" 
    for (const movie of listaMovies) {
        template += createCard (movie)
    }  
    return template
}   


export function imprimirTemplate(lista, donde, fn) {
    let template = ""
    for (const elementoIterado of lista) {
        template += fn(elementoIterado)
    }
    if( template ){
        donde.innerHTML = template
    }else{
        donde.innerHTML = `<h2 class="text-white"> No se encontraron resultados </h2> `
    }
}

export function createCard (movie){
     let card= `<article id="card" class=" flex flex-wrap flex-col w-52 bg-black/20 rounded-md items-center p-2">
    <a href="moviedetails.html?id=${movie.id}" class ="items-center flex flex-col "><img src="${movie.image}" alt="" class=" flex  w-48 h-fit object-cover rounded-md">
    <h3 class ="flex font-bold  text-yellow-400 text-center"> ${movie.title}</h3>
    <h4 class ="flex font-semibold  text-white/80 text-center">${movie.tagline} </h4>
    <p class = " line-clamp-5  text-white/50 text-center"> ${movie.overview}</p>
    </article></a>
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
    return filtro
}

export function filtrarPorNombre(lista, titulos) {
    const filtro = lista.filter(movie => movie.title.toLowerCase().startsWith(titulos.toLowerCase()))
    return filtro
}

