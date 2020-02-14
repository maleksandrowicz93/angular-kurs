import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.scss']
})
export class NgForComponentComponent implements OnInit {

  title = 'Angulara';

  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  dogs = new Array<Dog>();

  clickDogs = new Array<Dog>(
    new Dog('Reksio', 4),
    new Dog('Łatek', 3),
    new Dog('Maksiu', 5),
    new Dog('Łapek', 6),
    new Dog('Pluto', 8)
  );

  dog = new Dog('x', 2);

  constructor() {
    this.addDogs();
  }

  ngOnInit(): void {
  }

  addDogs(): void {
    this.dogs = this.dogs.concat(this.clickDogs);
  }

  removeDogs(): void {
    this.dogs = new Array<Dog>();
  }

}

class Dog {
  constructor(public name: string, public age: number) {}
}
