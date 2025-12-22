import { Component } from '@angular/core';
import {List} from './list/list';
import {Form, TodoItem} from './form/form';

@Component({
  selector: 'app-todo-manager',
  imports: [List, Form,],
  templateUrl: './todo-manager.html',
  standalone: true
})
export class TodoManager {

  task: TodoItem | null = null;

  getTask(event: TodoItem) {
    this.task = event
  }
}
