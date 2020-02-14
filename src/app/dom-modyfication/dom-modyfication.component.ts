import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-modyfication',
  templateUrl: './dom-modyfication.component.html',
  styleUrls: ['./dom-modyfication.component.scss']
})
export class DomModyficationComponent implements OnInit {

  title = 'modyfikacja DOM przykłady:';

  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  isVisible = true;
  isHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    this.isVisible = !this.isVisible;
  }

  hidden(): void {
    this.isHidden = !this.isHidden;
  }

}
