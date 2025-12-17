import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})

export class Form {

  newTask: string = ''
  @Output() sendTask = new EventEmitter<TodoItem>();

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      }
      this.sendTask.emit(newTodoItem);
      this.newTask = '';
    }
  }




}
