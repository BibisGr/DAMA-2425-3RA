import { Player } from './../../common/player';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-jugadores',
  imports: [],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent implements OnInit{

  player! : Player;
  constructor( private dataservice: DataService){}

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(){
    this.dataservice.getPlayers().subscribe(
      {
        next: (data)=>{
          console.log(data);
          this.player = data;
        },
        error: (err)=>{
          console.error(err);
        },
        complete: ()=>{
          console.log("Carga de jugadores completa");
        }
      }
    )
  }

  // superheroes = {
  //   SquadName: 'Los DAMAGERS',
  //   HomeTown: 'Valencia City',
  //   BaseSecreta: 'PIA08',
  //   Formed: 2024,
  //   Active: true,
  //   miembros: [
  //     {
  //       Alias: 'Superman',
  //       Nombre: 'Clark Kent',
  //       Poderes: ['Vuelo', 'Super Fuerza', 'Visión de Rayos X'],
  //       Activo: true,
  //       enemigos : [ 'lex luthor', 'joker', 'thanos' ]
  //     },
  //     {
  //       Alias: 'Batman',
  //       Nombre: 'Bruce Wayne',
  //       Poderes: ['Inteligencia', 'Riqueza', 'Habilidades de combate'],
  //       Activo: true,
  //       enemigos: [ 'lex luthor', 'el pinguino', 'catwoman' ]
  //     },
  //     {
  //       Alias: 'Áquaman',
  //       Nombre: 'Arthur Curry',
  //       Poderes: ['Control del agua', 'Super fuerza', 'Nadador experto'],
  //       Activo: true,
  //       enemigos: [ 'triton', 'sebastian', 'flounder' ]
  //     },
  //     {
  //       Alias: 'Wonder Woman',
  //       Nombre: 'Diana Prince',
  //       Poderes: ['Fuerza sobrehumana', 'Vuelo', 'Habilidades de combate'],
  //       Activo: true,
  //       enemigos: [ 'Ares', 'Hades', 'Circe' ]
  //     }
  //   ],

  // }


}
