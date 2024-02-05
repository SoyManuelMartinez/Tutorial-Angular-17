import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos preferidos de {{username}}</h3>
    <ul>
    @for (game of games; track game.id){
      <li (click)="juegoFavorito(game.name)">{{game.name}}</li>
    }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();


  games = [
    {
      id: 1,
      name: 'Minecraft'
    },
    {
      id: 2,
      name: 'Super Mario 64',
    },
    {
      id: 3,
      name: 'Dark Souls'
    }
    
  ]

  juegoFavorito(j: string):void{
    alert(`A ${this.username} le flipa cantidubi jugar a ${j}`);
    this.addFavoriteEvent.emit(j);
  }

}
