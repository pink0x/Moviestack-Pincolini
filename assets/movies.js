const url = "https://moviestack.onrender.com/api/movies"
const key = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
const options = {
        headers:{
                'x-api-key': key
        }    
}

const {createApp} = Vue
const optionsVue = {
        data (){
             return {
                movies:[],
                generos:[],
                search:"" ,
                genreSelected:"All",
                filtroFinal:[ ],
                 movie:{},
             }
        },

        beforeCreate(){
                fetch (url, options)
              .then (response=> response.json())
              .then ( (parametro) =>{
                this.movies = parametro.movies
                this.generos = [...new Set (this.movies.map (movie=> movie.genres).flat())] 
                this.filtroFinal = this.movies  
                for (movie of this.movies){this.movie= movie}  
                
                
                    
                
                
              })             
              
              .catch (err => console.log(err))
        },
        

        computed:{
                filtrar () {
                        const filtro=  this.movies.filter(movie=>movie.title.toLowerCase().includes(this.search.toLowerCase()) 
                        && (this.genreSelected == "All" || movie.genres.includes(this.genreSelected)))
                        this.filtroFinal=filtro         
                       },              
        }    ,
        methods:{
                likear (movieId) {     
                      
                        
                let favVue = JSON.parse(localStorage.getItem("favVue")) || []

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


