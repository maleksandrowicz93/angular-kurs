import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasksList = ['Sprzątanie kuwety', 'Gotowanie', 'Nauka angulara'];

  selected(task: string): void {
    console.log(task);
  }

}
