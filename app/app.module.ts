import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
import { CompletenessPipe } from './completeness.pipe';

import { MdSelectModule, MdButtonModule, MdCheckboxModule, MdListModule, MdCardModule, MdInputModule, MdRadioModule } from '@angular/material';

@NgModule({
  imports: [ BrowserModule, FormsModule, NoopAnimationsModule, MdSelectModule, MdButtonModule, MdCheckboxModule, MdListModule, MdCardModule, MdInputModule, MdRadioModule ],
  declarations: [ AppComponent, TaskListComponent, EditTaskComponent, NewTaskComponent, CompletenessPipe ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
