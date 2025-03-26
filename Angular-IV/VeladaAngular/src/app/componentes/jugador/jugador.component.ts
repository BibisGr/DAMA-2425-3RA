import { Jugador } from './../../common/jugador';
import { Participante } from './../../common/participante';
import { Component } from '@angular/core';
@Component({
  selector: 'app-jugador',
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {

  persona={
    nombre: 'Gaspar Prim Díaz',
    alias: 'Gaspi',
    pais: 'Argentina',
    pesoenKG : 76,
    rival: 'Perxita',
    win: 1,
    lose: 0
  }

  esdebut(player: Jugador){
    if(player.win ==0 || player.lose){
      return 'Debutante'
    } else return 'Experto'
  }

  jugador: Jugador={
    nombre: 'Rocío Lopez Bueno',
    alias: 'RoRo',
    pais: 'Spain',
    pesoenKG: 48,
    rival: 'Abby',
    win: 0,
    lose: 0
  }

  // participante : Participante={
  //   boxeador: {
  //   nombre: 'David García',
  //   alias: 'The Grefg',
  //   pais: 'Spain',
  //   pesoenKG: 85,
  //   rival: 'WetsCol',
  //   win: 0,
  //   lose: 0
  //   },
  //   profesion: 'streamer'
  // }
  
  miJugador = this.jugador
  participante : Participante={
    boxeador: this.miJugador,
    profesion: 'streamer'
  }


}
