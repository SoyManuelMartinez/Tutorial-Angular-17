import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h1>Componente de comentarios</h1>
    <img src="https://scontent-mad1-1.xx.fbcdn.net/v/t1.6435-9/210700502_526387135443582_5217669892969262937_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=hYUhKD_pFLEAX8XAOqT&_nc_ht=scontent-mad1-1.xx&oh=00_AfCRvaroz1kjdPvURowfjZciaM2giztyi6DWcgGLkHtfSw&oe=65E84410"/>
  `,
  styles: `
  img{
    width: 100%
    height: auto,
  }`
})
export class CommentsComponent {

}
