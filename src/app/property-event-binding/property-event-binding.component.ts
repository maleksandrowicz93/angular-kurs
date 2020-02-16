import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-event-binding',
  templateUrl: './property-event-binding.component.html',
  styleUrls: ['./property-event-binding.component.scss']
})
export class PropertyEventBindingComponent implements OnInit {

  profession = 'programista';
  skill = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

  saveP(event) {
    this.profession = event.target.value;
  }

  saveS(event) {
    this.skill = event.target.value;
  }

}
