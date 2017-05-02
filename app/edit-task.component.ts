import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
  <md-card *ngIf="childSelectedTask">
    <md-card-header>
      <md-card-title>{{childSelectedTask.description}}</md-card-title>
      <md-card-subtitle>Task Complete? {{childSelectedTask.done}}</md-card-subtitle>
    </md-card-header>
    <md-card-content>
      <md-input-container style="width: 100%;">
        <input mdInput placeholder="Task Description" [(ngModel)]="childSelectedTask.description">
      </md-input-container>
      <label>Enter Task Priority (1-3):</label>
      <br>
      <md-radio-group class="radio-group" [(ngModel)]="childSelectedTask.priority">
        <md-radio-button class="radio-button" [value]="1">1 (Low Priority)</md-radio-button>
        <md-radio-button class="radio-button" [value]="2">2 (Medium Priority)</md-radio-button>
        <md-radio-button class="radio-button" [value]="3">3 (High Priority)</md-radio-button>
      </md-radio-group>
      <br>
      <button class="btn btn-default" (click)="finishedEditing()">Done</button>
    </md-card-content>
  </md-card>
  <hr>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() clickSender = new EventEmitter();

  finishedEditing() {
    this.clickSender.emit();
  }
}
