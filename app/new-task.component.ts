import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
  <md-card>
    <md-card-header>
      <md-card-title>New Task</md-card-title>
    </md-card-header>
    <md-card-content>
      <md-input-container style="width: 100%;">
        <input mdInput placeholder="Task Description" #newDescription>
      </md-input-container>
      <md-select #newPriority style="width: 30%;">
        <md-option [value]="1"> Low Priority </md-option>
        <md-option [value]="2"> Medium Priority </md-option>
        <md-option [value]="3"> High Priority </md-option>
      </md-select>
      <button md-raised-button (click)="submitForm(newDescription.value, newPriority.value); newDescription.value='';" class="pull-right">Add</button>
    </md-card-content>
  </md-card>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();

  submitForm(description: string, priority: string) {
    var newTaskToAdd: Task = new Task(description, parseInt(priority));
    this.newTaskSender.emit(newTaskToAdd);
  }
}
