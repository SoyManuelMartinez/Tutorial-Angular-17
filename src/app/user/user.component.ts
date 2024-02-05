import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = "Manolitox";
  isLoggedIn: boolean = false;
  favGame = '';

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  saludar() : void {
    alert("Hola "+this.username)
  }

  cambiarEstado(): void{
    this.isLoggedIn = !this.isLoggedIn;
  }
}
