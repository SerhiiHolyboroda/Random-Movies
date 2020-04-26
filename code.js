/*

http://www.omdbapi.com/?i=tt3896198&apikey=93ac6620 
3896198
*/  
let bu = document.querySelector('.click')
bu.addEventListener('click' , function(){
  randomMovie()
})


function randomMovie(){
  let r = Math.random() * 9|0 ,a= Math.random() * 9|0 , n = Math.random() * 9|0 , d = Math.random() * 9|0, o = Math.random() * 9|0 , m = Math.random() * 9|0 ,s = Math.random() * 9|0 ; 
  const xhr = new XMLHttpRequest();
  xhr.open('GET' , `http://www.omdbapi.com/?i=tt${r}${a}${n}${d}${o}${m}${s}&apikey=93ac6620` , false)
  xhr.send()
  console.log(xhr.responseText)
  console.log( r  , a  , n  , d  , o ,m ,s)
 
  JSON.parse(xhr.responseText)
  
  const data = JSON.parse(xhr.responseText) 
  console.log(typeof(data))
  console.log(data.Poster)
  console.log(data.Title)
  document.querySelector('.text').innerHTML += data.Title ;
   document.querySelector('.img').style.backgroundImage = `url('${data.Poster}')` ;
    
}

let r = Math.random() * 9|0 ,a= Math.random() * 9|0 , n = Math.random() * 9|0 , d = Math.random() * 9|0, o = Math.random() * 9|0 , m = Math.random() * 9|0 ,s = Math.random() * 9|0 ; 
 
fetch(`http://www.omdbapi.com/?i=tt${r}${a}${n}${d}${o}${m}${s}&apikey=93ac6620`)
  // .then(response => {
  //   response.json()
  .then(response => {
    console.log(response);
   
    let movie = response.json()
    
    return movie;
  })
  .then(movie => { (movie.Title) 
    if(movie.Title == 'undefined'){
      console.log('Fuck')
    }
  console.log(movie.Title)
  document.querySelector('.text0').innerHTML += movie.Title ;
document.querySelector('.img0').style.backgroundImage = `url('${movie.Poster}')` ;
  })
 
  
 