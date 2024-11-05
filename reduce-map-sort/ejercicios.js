'use strict'

ACT5(futbolistas)
function ACT1 (futbolistas){

  let resultado = futbolistas.map(jugador=> {
    let goles = jugador.partidosJugados.reduce((total, partido) => 
      total + partido.goles
    , 0)
    let asistencias = jugador.partidosJugados.reduce((total, partido) => 
      total + partido.asistencias, 0)
    return {nombre: jugador.nombre, goles: goles, asistencias: asistencias}
  })
  console.log(resultado)
}

function ACT2 (futbolistas){

  let resultado = futbolistas.filter( jugador => !jugador.partidosJugados.some(partido=>partido.tarjetaRoja))
  console.log(resultado)
}

function ACT3 (futbolistas,nombreJugador){

    const jugador = futbolistas.find(j=> j.nombre === nombreJugador)

    if(jugador){

    return jugador.partidosJugados.filter(partido=>partido.goles>0).map(partido=>partido.rival)
  }else{
    return "jugador no encontrado"
  }

}
function ACT4 (futbolistas){

  let resultado = futbolistas.map(jugador=> {
    let tarjetasAmarillas= jugador.partidosJugados.reduce((total,partidos) => total + partidos.tarjetaAmarilla,0)
     return {nombre:jugador.nombre, tarjetasAmarillas : tarjetasAmarillas}    
    })

  console.log(resultado)
}


function ACT5 (futbolistas){

  let resultado = futbolistas.filter(jugador=>jugador.partidosJugados.some(partido=> partido.goles>0)) 
  console.log(resultado.length)
}
