import { Jugador } from "./jugador";

export class Participante {
  boxeador: Jugador;
  profesion: string;

  constructor(player: Jugador, profesion: string){
    this.boxeador =player;
    this.profesion = profesion;
  }
}
