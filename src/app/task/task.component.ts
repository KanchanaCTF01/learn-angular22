import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../modules/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskObj: Task;
  @Output() deleteTask: EventEmitter<TaskComponent> = new EventEmitter();
  @Output() taskSelected: EventEmitter<TaskComponent> = new EventEmitter();

  isSelected: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }
  deletedTask() {
    this.deleteTask.emit(this);
  }
  taskSelect() {
    this.taskSelected.emit(this);
  }
}
