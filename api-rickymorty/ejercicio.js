'use strict'


fetch("https://rickandmortyapi.com/api/character")
  .then(response =>{
      if(response.ok){
        return response.json()
      }
  })

  .then(data=> data.results.map((item) => item.image).forEach(imagen => {
  
      const contenedor = document.getElementById('contenedor')
      const img = document.createElement("img")
      img.src = imagen
      img.style.width = "200px"
      img.style.height = '200px'
      img.style.margin = '10px'

      contenedor.appendChild(img)
      
}));


function desaparecer(){
  const contenedor = document.getElementById('contenedor')

  if(contenedor.style.display === 'none'){
    contenedor.style.display = 'flex'
  }else{
    contenedor.style.display = 'none'
  }
}
    

