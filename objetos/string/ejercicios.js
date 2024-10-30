'use strict'

ejercicio8('Hola Mundo')
function ejercicio1(word){

  let resultado = word.trim().toUpperCase()
  let longitud = word.length 
  console.log(resultado,longitud)
}

function ejercicio2(frase){

  let posicion = frase.indexOf('Sergio');
  console.log(posicion)

  frase =  frase.slice(0,posicion)+'Mauri'+frase.slice(posicion + 'Sergio'.length);
  console.log(frase)
}

function ejercicio3(frase){

  let posicion = frase.indexOf('javascript');
  let palabra = frase.slice(posicion,posicion+'javascript'.length)
  palabra = palabra.toUpperCase()
  frase = frase.substring(0,posicion)+palabra+frase.substring((posicion+'javascript'.length),frase.length)
  
  console.log(frase)
}

function ejercicio4(frase){
  let mitad = frase.length/2 
  let fraseMitad = frase.slice(0,mitad)
  fraseMitad = fraseMitad.toUpperCase()
  console.log(fraseMitad)
  
}

function ejercicio5(frase){
  let indice = frase.indexOf('Mundo')

  let mund = frase.slice(indice, indice+4)
  mund = mund.toUpperCase()
  console.log(mund)
}

function ejercicio6(frase){
  let indice = frase.length- 3
  let mund = frase.slice(indice, indice+3).toLowerCase()
  console.log(mund)
}

function ejercicio7(frase){

  let indice = frase.indexOf('o')
  let sub = frase.substring(indice,frase.length);
  
  let posiciones = []
  while(indice!==-1){ //significa que no ha encontrado la letra
    posiciones.push(indice)
    indice = frase.indexOf('o',indice+1);
  }
  console.log(posiciones)

  let letra = 'O'
  frase = frase.slice(0,posiciones[0])+letra+frase.slice(posiciones[0]+1,posiciones[1])+letra+frase.slice(frase.length)
  console.log(frase)
}

function ejercicio8(frase){
  let aparicionMundo = frase.indexOf('Mundo')
  let sub = frase.substring(aparicionMundo,aparicionMundo+3).toUpperCase()

  console.log(sub)
  
  
}
