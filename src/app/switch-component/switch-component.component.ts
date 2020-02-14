import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styles: []
})
export class SwitchComponentComponent implements OnInit {

  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  constructor() { }

  ngOnInit(): void {
  }

}
