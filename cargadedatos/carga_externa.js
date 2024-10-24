'use strict'
/*Intruccion para que se espere que este cargado el documento (porque he puesto el script 
en el head)*/
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
      empleados = addEmpleado(empleados)
      empleados = removeEmpleado(empleados)
      let idEmpleado= prompt("Introduce empleado a buscar: ")
      buscarEmpleado(idEmpleado)
    })

   .catch (error=>{
      console.error('Error: ',error)
    })

  
}

