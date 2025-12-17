import { Component } from '@angular/core';
import {List} from './list/list';
import {Form} from './form/form';

@Component({
  selector: 'app-todo-manager',
  imports: [List, Form],
  templateUrl: './todo-manager.html',
})
export class TodoManager {

}
