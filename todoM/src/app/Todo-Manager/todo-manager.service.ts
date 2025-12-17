import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {
  constructor(private http: HttpClient) {
  }
  //سرویس های اتصال به بکند
  getAllTasks(): void {}
  addTask(task: any): void {}
  removeTask(id: number): void {}
  getTaskById(id: number): any {}
  updateTask(id: number, task: any): any {}
}
