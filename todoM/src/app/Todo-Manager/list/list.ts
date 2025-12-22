import {Component, computed, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TodoItem} from '../form/form';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css'
})

export class List implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.task || !this.task.id) return
    this.taskList.push(this.task);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));

  }

  @Input() task: TodoItem | null = null;
  taskList: TodoItem[] = []
  filteredTaskList: TodoItem[] = []

  sort(sortType: string) {
    switch (sortType) {
      case 'open': {
        this.filteredTaskList = this.taskList.filter(i => !i.completed);
        break;
      }
      case 'done': {
        this.filteredTaskList = this.taskList.filter(i => i.completed);
        break;
      }
      default: {
        this.filteredTaskList = [...this.taskList]
      }

    }
  }

  openCount = computed(() =>
    this.taskList.filter(i => !i.completed).length
  );

  doneCount = computed(() =>
    this.taskList.filter(i => i.completed).length);
}
