fetch("https://rickandmortyapi.com/api/character")
  .then(response =>{
      if(response.ok){
        return response.json()
      }
  })

  .then(data=> data.results.map((item) => { return {name : item.name , image: item.image}}).forEach(imagen => {
        
      const padre = document.getElementById('contenedor')

      const personaje = document.createElement('figure')
      personaje.style.display = 'inline-block'
      personaje.style.margin = '10px'
      personaje.style.textAlign = 'center'

      const img = document.createElement('img')
      img.src = imagen.image
      img.style.width = "200px"
      img.style.height = '200px'
      
      const titulo = document.createElement('figcaption')
      titulo.textContent = imagen.name
      titulo.style.marginTop = '5px'
      titulo.style.fontSize = '16px'
      titulo.style.color = 'green'
      
      personaje.appendChild(img)
      personaje.appendChild(titulo)
      padre.appendChild(personaje)
}));

  


function desaparecer(){
  const contenedor = document.getElementById('contenedor')

  if(contenedor.style.display === 'none'){
    contenedor.style.display = 'flex'
  }else{
    contenedor.style.display = 'none'
  }
}
    

