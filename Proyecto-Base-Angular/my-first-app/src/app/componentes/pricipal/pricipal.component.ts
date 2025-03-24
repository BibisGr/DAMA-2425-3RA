import { Component } from '@angular/core';

@Component({
  selector: 'app-pricipal',
  imports: [],
  templateUrl: './pricipal.component.html',
  styleUrl: './pricipal.component.css'
})
export class PricipalComponent {
  name: string = 'Bertha';
  address = 'Calle 456';
  edad: number = 25;
  altura = 1.60;
  estado: boolean = true;

  frutas: string[] = ['manzana', 'pera', 'uva', 'manzana', 'cereza', 'melón'];

  fruta = {
    nombre: 'manzana',
    color: 'rojo',
    precio: 2.5
  }

  frutas2: any[] = [
    {
      nombre: 'manzana',
      color: 'rojo',
      precio: 2.5
    },
    {
      nombre: 'pera',
      color: 'verde',
      precio: 3.5
    },
    {
      nombre: 'uva',
      color: 'morado',
      precio: 4.5
    }
  ]

  masUno(): void {
     this.edad++
  }

  cambiaDatos(): void{
    this.name = 'Ana';
    this.address = 'Calle 123';
    this.edad = 30;
    this.altura = 1.70;
    this.estado = false;
  }



}
