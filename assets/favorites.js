


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
                movies:[],
                favorites:[],
                favVue:{},
                
                     }
        },

        beforeCreate(){
                fetch (url, options)
              .then (response=> response.json())
              .then ( (parametro) =>{
                this.movies = parametro.movies
                this.favVue = JSON.parse(localStorage.getItem("favVue")) || []
                for (movie of this.movies){                  
                    if(favVue.includes(movie.id)){
                        favorites.push(movie)
                        
                    }                
                }                 
                               
              })             
              
              .catch (err => console.log(err))
        },
        

        
        methods:{
                likear (movieId) {     
                      
                        
                favVue = JSON.parse(localStorage.getItem("favVue")) || []

                   //para sacar de favo
                if (favVue.includes(movieId)){
                        favVue.splice(favVue.indexOf(movieId), 1)
                        event.target.src = "Recursos Moviestack/heartOff.svg"
                }
            
            else {
                favVue.push(movieId)
                
                event.target.src = "Recursos Moviestack/heartOn.svg"
            }
            localStorage.setItem('favVue', JSON.stringify(favVue))
                    
        },        
 }
          
}

const app = createApp (optionsVue)
app.mount('#app')


// fetch(url, options)
//     .then(response => response.json())
//     .then(movies => {
//         data = movies.movies      
//         let favo = JSON.parse(localStorage.getItem("favVue")) || []
//         let movieFavs = []
        

//         for (const movies of data) {
//             if (favo.includes(movies.id)) {
//                 movieFavs.push(movies)
//             }
//         }
        


//     })
    


    
