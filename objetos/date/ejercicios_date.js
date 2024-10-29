'use strict'

ejercicio15('1997-05-20')
function ejercicio1(anio){
  const ahora = new Date()
  const fechaDada = new Date(anio,0,1)
  let diferencia = ahora - fechaDada
  console.log(diferencia)
  diferencia = Math.floor(diferencia / (100*60*60*24))
  console.log("La diferencia de dias es de "+diferencia)
}


function ejercicio2(fecha1,fecha2){
  if(fecha1>fecha2){
    console.log(`${fecha1} es posterior a ${fecha2}`)

  }else{
    console.log(`${fecha1} es anterior a ${fecha2}`)
  }
  
}

function ejercicio3(date){
  const fecha = new Date(date)
  let mes = fecha.getMonth() + 1
  let dia = fecha.getDate() 
  let diasFaltan 
  switch (mes){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      diasFaltan = 31 -dia
      break
    case 2:
      diasFaltan= 28 - dia
      break
    default:
      diasFaltan = 30 - dia
      break
  }
  console.log(diasFaltan)
}

function ejercicio4(date){

  const fecha = new Date(date)
  let dia = fecha.getDate()
  let mes = fecha.getMonth() +1
  let anio = fecha.getFullYear()

  let fechaNueva = `${dia}-${mes}-${anio}`
  console.log(fechaNueva)
  let prueba = fecha.toLocaleDateString()
  console.log(prueba)
}

function ejercicio5(date){
  
  const fecha = new Date(date)
  let dia = fecha.getDate() + 7
  fecha.setDate(dia)
  dia = fecha.getDate()
  let mes = fecha.getMonth() +1
    switch (mes){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          if(dia>31){
            mes + 1
          }
          break
        case 2:
          if(dia>28){
            mes + 1
          }
          break
        default:
          if(dia>30){
            mes +1
          }
          break
      }
  let anio = fecha.getFullYear()

  let fechaNueva = `${dia}-${mes}-${anio}`
  console.log(fechaNueva)

}

function ejercicio6(date){

  const fecha = new Date(date)
  let dia = fecha.getDate()
  let mes = fecha.getMonth() 
  let anio = fecha.getFullYear()

  let fechaNueva = `${dia}-${mes}-${anio}`
  const nombresMeses = [
        "Enero",    // 0
        "Febrero",  // 1
        "Marzo",    // 2
        "Abril",    // 3
        "Mayo",     // 4
        "Junio",    // 5
        "Julio",    // 6
        "Agosto",   // 7
        "Septiembre", // 8
        "Octubre",  // 9
        "Noviembre", // 10
        "Diciembre" // 11
    ];

  return `${dia} de ${nombresMeses[mes]} de ${anio}`
}

function ejercicio7(anio){
  const ahora = new Date()
  const fechaDada = new Date(anio)
  let diferencia = ahora - fechaDada
  console.log(diferencia)
  diferencia = Math.floor(diferencia / (100*60*60))
  console.log("La diferencia de horas es de "+diferencia)
}

function ejercicio8(anio) {
    const ahora = new Date()
    const dada = new Date(anio)
    let diferencia = ahora - dada


  /*Explicacion: 
        calculaos los segundos totales y lo dividimos entre 60, dandonos el resto despues de contar minutos completos 
        y así sucesivamente con los demás*/
    let segundos = Math.floor((diferencia / 1000)%60) 
    let minutos = Math.floor((diferencia / (1000 * 60)) % 60)
    let horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24)
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))

    let resultado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
    
    console.log(`Tiempo transcurrido desde el ${dada.toLocaleDateString()}: ${resultado} (Total de días: ${dias})`)
}

function ejercicio9(anio,fecha){

  const inicio = new Date(anio,0,1)
  const final = new Date(fecha)

  let diferencia = final - inicio

  let dias = Math.floor(diferencia /1000 *60*60*24)

  console.log(`Han pasado un total de ${dias} dias`)
  

}

function ejercicio10(anio1,anio2){

  const fecha1 = new Date(anio1)
  const fecha2 = new Date(anio2)

  if(fecha1>fecha2){
    return `${fecha1.toLocaleDateString()} es posterior a ${fecha2.toLocaleDateString()}`
  }else{
    
    return `${fecha2.toLocaleDateString()} es posterior a ${fecha1.toLocaleDateString()}`
  }
}

function ejercicio11(anio){
    const fechaDada = new Date(anio)
    const fechaModificar = new Date(anio)
    fechaModificar.setDate(1)
    
    let diferencia = fechaDada -fechaModificar
    let diasDiferencia = Math.floor(diferencia/(1000 * 60 * 60 * 24))
    console.log("Hay "+diasDiferencia+" dias de diferencia")
}

function ejercicio12(anio){
    const fecha = new Date(anio)
    let dia = fecha.getDate()
    let mes = fecha.getMonth() + 1
    let anyo = fecha.getFullYear()

    let fechaGuay = anyo+"-"+mes+"-"+dia
    console.log(fechaGuay)
}

function ejercicio13(anio){
  const ahora = new Date()
  const dada = new Date(anio)

  let diferencias = ahora - dada 
  let minutosDiff = Math.floor(diferencias/(1000*60))
  console.log("Han pasado "+minutosDiff+" minutos")
}
function ejercicio15(anio){
const nombresMeses = [
    "January",   // 0
    "February",  // 1
    "March",     // 2
    "April",     // 3
    "May",       // 4
    "June",      // 5
    "July",      // 6
    "August",    // 7
    "September", // 8
    "October",   // 9
    "November",  // 10
    "December"   // 11
];
  const fecha = new Date(anio)
  let dia = fecha.getDate()
  let anyo = fecha.getFullYear()
  let mes = fecha.getMonth() 
  let nombreMes = nombresMeses[mes]
  let minutos = String(fecha.getMinutes()).padStart(2,0)
  let horas = String(fecha.getHours()).padStart(2,0)
  let apm = horas>= 12 ? 'AM' :'PM' 
  
  let resulado = dia+" de "+nombreMes+" de "+anyo+" "+horas+":"+minutos+" "+apm

  console.log(resulado)
}
