import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Participante, Player } from '../common/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlData = 'data/data.json'
  constructor( private http: HttpClient) { }

  getPlayers(): Observable<Player>{
    return this.http.get<Player>(this.urlData)
  }

  public getparticipanteyId(id: string): Observable<Participante> {
    return this.getPlayers()
      .pipe(map(players => {
        const participante = players.participantes
          .find(participante => participante.alias === id);
        if (!participante) {
          throw new Error('No se encontró el jugador con el id: ' + id);
        }
        return participante;
      }));
  }

}
