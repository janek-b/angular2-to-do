import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
  <div>
    <div *ngIf="childSelectedTask">
      <h3>{{childSelectedTask.description}}</h3>
      <p>Task Complete? {{childSelectedTask.done}}</p>
      <hr>
      <h3>Edit Task</h3>
      <label>Enter Task Description:</label>
      <input class="form-control" [(ngModel)]="childSelectedTask.description">
      <label>Enter Task Priority (1-3):</label>
      <br>
      <div class="radio">
        <label>
          <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="1">1 (Low Priority)
        </label>
      </div>
      <br>
      <div class="radio">
        <label>
          <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="2">2 (Medium Priority)
        </label>
      </div>
      <br>
      <div class="radio">
        <label>
          <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="3">3 (High Priority)
        </label>
      </div>
      <br>
      <button class="btn btn-default" (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() clickSender = new EventEmitter();

  finishedEditing() {
    this.clickSender.emit();
  }
}
