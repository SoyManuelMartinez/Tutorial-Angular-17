import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommentsComponent],
  templateUrl: './app.component.html', 
  // template: `
  // <h1>Aquí el menda</h1>
  // {{title}}
  // {{city}}
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular17Clase';
  city: string = "Sevilla";
}
