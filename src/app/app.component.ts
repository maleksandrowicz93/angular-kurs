import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angulara';
  pi = Math.PI;
  date = new Date();

  dog = new Dog('Reksio', 4);
  unknownDog: Dog;

}

class Dog {
  constructor(public name: string, public age: number) {}

  showDog() {
    return 'Mój pies to ' + this.name + ' i ma ' + this.age + ' lata';
  }
}
