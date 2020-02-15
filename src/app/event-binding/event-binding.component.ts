import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  inputText = '';
  colorClass = 'color';
  isDisable = true;

  constructor() { }

  ngOnInit(): void {
  }

  onFocus() {
    if (this.colorClass === 'color') {
      this.colorClass = 'color2';
    } else {
      this.colorClass = 'color';
    }
  }

  onClick(event) {
    console.log(event);
  }

  onMouseMove(event) {
    console.log('x: ' + event.clientX + ', y:' + event.clientY);
  }

  onPaste() {
    this.inputText = 'Nie wklejaj, wpisz';
  }

  change() {
    this.isDisable = !this.isDisable;
  }

}
