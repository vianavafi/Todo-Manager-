import { Routes } from '@angular/router';
import {TodoManager} from './Todo-Manager/todo-manager';

export const routes: Routes = [
  { path: '', redirectTo: 'todoManager', pathMatch: 'full' },
  { path: 'todoManager', component: TodoManager },

  { path: '**', redirectTo: 'todoManager' },
];
