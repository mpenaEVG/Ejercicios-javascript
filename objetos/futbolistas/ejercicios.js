'use strict'

  golesPromedio(futbolistas)
  function masDe20Goles(futbolistas){
      futbolistas.forEach(futbolista =>{
        if(futbolista.goles > 20){
          alert(futbolista.nombre)
        }
      })
  }

  function golesTotales(futbolistas){
      let goles = 0
      futbolistas.forEach(futbolista =>{
          goles += futbolista.goles
      })
    alert("El total de goles es "+goles)
  }

  function burbujaAsistencias(futbolistas){
    let jugadores = []
    futbolistas.forEach(futbolista =>{
      jugadores.push({
        nombre: futbolista.nombre,
        asistencias: futbolista.asistencias
    })
  })

  for(let i=0;i<jugadores.length;i++){
    for(let j=0;j<jugadores.length-i-1;j++){
      if(jugadores[j].asistencias<jugadores[j+1].asistencias){
             let temp = jugadores[j];
            jugadores[j] = jugadores[j + 1];
            jugadores[j + 1] = temp;
      }
    }
  }
  console.log(jugadores)
  }

  function sortAsistencias(futbolistas){
    let jugadores = []
      futbolistas.forEach(futbolista =>{
        jugadores.push({
          nombre: futbolista.nombre,
          asistencias: futbolista.asistencias
      })
    })

  jugadores.sort(function(a,b){
    if(a.asistencias<b.asistencias){
      return 1
    }
    if(a.asistencias>b.asistencias){
      return -1
    }
    return 0
  })
  console.log(jugadores)
  }

  function contarTarjetas(futbolistas){
  let equipos = []
    futbolistas.forEach(futbolista =>{
          equipos.push({
            equipo: futbolista.equipo,
            tarjetas: futbolista.tarjetaAmarilla + futbolista.tarjetaRoja
          })
    })
  let indiceEliminar = 0
  for(let i=0;i<equipos.length;i++){
    for(let j=i+1;j<equipos.length;j++){
      if(equipos[i].equipo === equipos[j].equipo){
        equipos[i].tarjetas += equipos[j].tarjetas
        equipos.splice(j,1)
        j--
      }
    }
  }
  console.log(equipos)
  }

  function golesPromedio(futbolistas){  
  let goles = []
  futbolistas.forEach(futbolista=>{
      goles.push({
        nombre: futbolista.nombre,
        promedioGoles: futbolista.goles / futbolista.partidosJugados
    })
  })

  console.log(goles)

  }
  function mayorAsistencias(futbolistas){
  let maxNombre = ""
  let maxAsistencias = 0

  futbolistas.forEach(futbolista=>{
    if(futbolista.asistencias>maxAsistencias){
      maxAsistencias = futbolista.asistencias
      maxNombre = futbolista.nombre
    }
  })
  console.log(maxNombre,maxAsistencias)
  }

  function listarPosicion(futbolistas){

  let delanteros = []
  let defensas = []
  let porteros = []
  let mediocampistas = []
  futbolistas.forEach(futbolista=>{
    switch (futbolista.posicion){
      case "Delantero": 
        delanteros.push(futbolista.nombre)
        break
      case "Portero": 
        porteros.push(futbolista.nombre)
        break
      case "Defensa": 
        defensas.push(futbolista.nombre)
        break 
      case "Mediocampista": 
        mediocampistas.push(futbolista.nombre)
        break
      default:
        break
    }
  })
  let posiciones = ({
    delanteros: delanteros,
    defensas: defensas,
    porteros: porteros,
    mediocampistas: mediocampistas
  })

  console.log(posiciones)
  }

