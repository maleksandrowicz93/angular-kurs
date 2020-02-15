import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-binding',
  templateUrl: './propert-binding.component.html',
  styleUrls: ['./propert-binding.component.scss']
})
export class PropertBindingComponent implements OnInit {

  inputText: string;
  maxLength: number;
  colorClass: string;
  logoUrl: string;

  isDisable = true;
  areDefaultValues = true;

  constructor() {
    this.setDefaultValues();
    this.disableButtonFor3s();
  }

  ngOnInit(): void {
  }

  change() {
    this.areDefaultValues = !this.areDefaultValues;
    if (this.areDefaultValues) {
      this.setDefaultValues();
    } else {
      this.setChangedValues();
    }
    this.disableButtonFor3s();
  }

  setDefaultValues() {
    this.inputText = 'Tekst';
    this.maxLength = 5;
    this.colorClass = 'color';
    this.logoUrl = '';
  }

  setChangedValues() {
    this.inputText = 'Zmiana tekstu i koloru';
    this.maxLength = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  disableButtonFor3s() {
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
    this.isDisable = true;
  }

}
