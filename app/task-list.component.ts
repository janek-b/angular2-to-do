import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allTasks">All Tasks</option>
    <option value="completedTasks">Completed Tasks</option>
    <option value="incompleteTasks" selected="selected">Incomplete Tasks</option>
  </select>

  <ul>
    <li (click)="isDone(currentTask)" *ngFor="let currentTask of childTaskList | completeness:filterByCompleteness">{{currentTask.description}} {{currentTask.priority}}
      <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone(currentTask)"/>
      <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggleDone(currentTask)"/>
      <button (click)="editTask(currentTask)">Edit</button>
    </li>
  </ul>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "incompleteTasks";

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  editTask(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  toggleDone(clickedTask: Task) {
    clickedTask.done = !(clickedTask.done);
  }

  isDone(clickedTask: Task) {
    if (clickedTask.done === true) {
      console.log("This task is done!");
    } else {
      console.log("This task is not done. Better get to work!");
    }
  }

  // priorityColor(currentTask) {
  //   if (currentTask.priority === 3) {
  //     return "bg-danger";
  //   } else if (currentTask.priority === 2) {
  //     return "bg-warning";
  //   } else {
  //     return "bg-info";
  //   }
  // }

}
