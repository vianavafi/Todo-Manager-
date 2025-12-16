import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  todoList: TodoItem[] = [];
  newTask: string = ''

  addTask(): void {
    if(this.newTask.trim() !== '') {
      const newTodoItem: TodoItem = {
        id : Date.now(),
        task : this.newTask,
        completed: false
      }

      this.todoList.push(newTodoItem);
      this.newTask = '';
    }
  }
  toggleComplete(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;
    console.log(this.todoList);

  }
  deleteTask(id:number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
    console.log(this.todoList);
  }
}
