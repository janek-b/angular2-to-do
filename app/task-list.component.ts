import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <md-card>
    <md-card-content>
      <md-select [(ngModel)]="filterByCompleteness" style="width: 30%">
        <md-option value="allTasks">All Tasks</md-option>
        <md-option value="completedTasks">Completed Tasks</md-option>
        <md-option value="incompleteTasks" selected="selected">Incomplete Tasks</md-option>
      </md-select>
      <md-list>
        <md-list-item *ngFor="let currentTask of childTaskList | completeness:filterByCompleteness">
          <md-checkbox [(ngModel)]="currentTask.done">{{currentTask.description}}</md-checkbox>
          <button md-button (click)="editTask(currentTask)">Edit</button>
        </md-list-item>
      </md-list>
    </md-card-content>
  </md-card>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "incompleteTasks";

  editTask(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
