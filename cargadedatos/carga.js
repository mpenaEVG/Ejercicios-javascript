'use strict'

let datosEmpleados = "12345,Javier Arias Carroza,45,Masculino,Gerente 67890,Pablo Caldito Gomez,33,Masculino,Desarrollador 11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista 44556,Jose Luis del Valle del Pino,50,Masculino,Contador 33445,David Fariña Morena,40,Masculino,Diseñador 22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador 56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor 34567,Angel Guiberteau Franco,47,Masculino,Administrador 12333,Paloma Hernandez Sanchez,28,Femenino,Marketing 67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos 99887,Ceus Martin Llera,29,Masculino,Asistente 77665,Celia Moruno Herrojo,32,Femenino,Analista 55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto 66778,Mauricio Peña Dominguez,36,Masculino,Auditor 88777,Carlos Rodriguez Botello,45,Masculino,Programador 33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero 99123,David Silva Vega,35,Masculino,Soporte Técnico 78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador 66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero 11234,Maria Vidigal Barroso,30,Femenino,Contadora"

/*
let listaEmpleados = cargarDatos(datosEmpleados)
mostrarDatos(listaEmpleados)
addEmpleado(listaEmpleados)
mostrarDatos(listaEmpleados)
listaEmpleados = removeEmpleado(listaEmpleados)
mostrarDatos(listaEmpleados)
let idEmpleado = prompt("Introduce id del empleado a buscar")
buscarEmpleado(idEmpleado)
*/
function cargarDatos(datos){
  let lineaEmpleado = datos.split("\n");
  let empleados = []

  lineaEmpleado.forEach(linea=> {
      let info = linea.split(",");
      if(info.length >=5){
        empleados.push({
        id: info[0].trim(),
        Nombre: info[1].trim(),
        Edad: info[2].trim(),
        Genero: info[3].trim(),
        Puesto: info[4].trim()
      })
    }
  })
  return empleados
}
function cargarDatosManual(datosEmpleados) {
  
    let contadorComas = 0 
    let empleado = ""
    let empleados = []
    let contador = 0

    for(let i=0;i<datosEmpleados.length;i++){
      if(datosEmpleados[i]===","){
        contadorComas++
      }
      if(contadorComas === 4){
        empleado += datosEmpleados[i]
        if(datosEmpleados[i]===" " || i ==datosEmpleados.length-1){
          empleados[contador]=empleado
          empleado = ""
          contadorComas = 0
          contador++
        }
      }else{
        empleado += datosEmpleados[i]

      }
    }
    console.log(empleados)
    let listaEmpleados = []

    empleados.forEach(element => {

      let datos = element.split(",")

      let idEmpleado = datos[0].trim()
      let nombre = datos[1].trim()
      let edad = datos[2].trim()
      let genero = datos[3].trim()
      let puesto = datos[4].trim()

      listaEmpleados.push({
       id: idEmpleado,
       Nombre : nombre,
       Edad : edad,
       Genero : genero,
       Puesto : puesto
       })
    })
  
    return listaEmpleados
}


function mostrarDatos(lista){

    lista.forEach(empleado=>{
      
      console.log("Id: "+empleado.id+"\nNombre: "+empleado.Nombre+"\nEdad: "+empleado.Edad+"\nGenero: "+empleado.Genero+"\nPuesto: "+empleado.Puesto+"\n")

    })
}


function buscarEmpleado(idEmpleado){
  listaEmpleados.forEach(empleado=>{
    if(empleado.id === idEmpleado){
      if(empleado.id === "12345"){
        empleado.Puesto = "Mamporrero"
      }
      alert("El empleado con id "+idEmpleado+"\nNombre: "+empleado.Nombre+"\nEdad: "+empleado.Edad+"\nGenero: "+empleado.Genero+"\nPuesto: "+empleado.Puesto+"\n")
    }
  })
}

function addEmpleado(listaEmpleados){
    if(confirm("Deseas Introducir nuevo empleado?")){
        let id = prompt("Introduce el ID del nuevo empleado:")
        let nombre = prompt("Introduce el nombre del nuevo empleado:")
        let edad = prompt("Introduce la edad del nuevo empleado:")
        let genero = prompt("Introduce el género del nuevo empleado:")
        let puesto = prompt("Introduce el puesto del nuevo empleado:")

      let nuevoEmpleado={
          id: id,
          Nombre: nombre,
          Edad: edad,
          Genero: genero,
          Puesto: puesto
        }
      listaEmpleados.push(nuevoEmpleado)
    }
}

function removeEmpleado(listaEmpleados){
  if(confirm("Deseas eliminar a un empleado?")){
      let id = prompt("Introduce el ID:")
      listaEmpleados = listaEmpleados.filter(empleado=>empleado.id.trim() !== id.trim())
    }
  return listaEmpleados
}
