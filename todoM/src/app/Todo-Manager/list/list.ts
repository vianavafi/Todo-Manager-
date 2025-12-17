import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TodoItem} from '../form/form';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css'
})

export class List implements OnChanges {
  @Input() task: any = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.task) {
    }
  }
}
