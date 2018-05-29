import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-juegos',
  templateUrl: './video-juegos.component.html',
  styleUrls: ['./video-juegos.component.css'],
  // template: '<h2> componenete de {{nombre}}</h2><h3 *ngIf="control != true">el juego es {{juego1}}</h3> <h3 *ngIf="control == true">el juegador es {{juego2}}</h3> <h2>listado del vector</h2> <ul><li *ngFor="let vec of vector">{{vec}}</li></ul>' esto es el html
  
})
// export class VideoJuegosComponent implements OnInit {
  export class VideoJuegosComponent{
    // public nombre='video juegos';
    // public juego1 = 'mario';
    // public juego2 = 'mario2';
    // public control = false;
    // public vector = ['counter','dota','desertCombat']
    public nombre:string;
    public juego1:string;
    public juego2:string;
    public control:boolean;
    public vector:Array<any>;
  constructor(){ 
    this.nombre='video juegos';
    this.juego1 = 'mario';
    this.juego2 = 'mario2';
    this.control = false;
    this.vector = ['counter','dota','desertCombat']
  }

  // ngOnInit() {
  // }

}
