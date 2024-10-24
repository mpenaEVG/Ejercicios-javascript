'use strict'

document.addEventListener('DOMContentLoaded', () => {
    cargarDatosConFetch();
});

function cargarDatosConFetch(){

    fetch('empleados2DAW.txt')
    .then(response=>{
      if(!response.ok){
        throw new Error('Error al cargar el archivo')
      }
      return response.text()
    })

    .then(data=>{

      let empleados = cargarDatos(data)
      console.log(empleados)
      mostrarDatos(empleados)
    })

   .catch (error=>{
      console.error('Error: ',error)
    })

  
}

