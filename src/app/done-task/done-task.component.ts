import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.scss']
})
export class DoneTaskComponent implements OnInit {

  @Input()
  tasksDone;

  constructor() { }

  ngOnInit(): void {
  }

}
