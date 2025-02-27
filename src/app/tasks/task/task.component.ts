import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { Task } from '../../models';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  task = input.required<Task | null>();

  constructor(private _tasksService: TasksService) {}

  onCompleteTask() {
    this._tasksService.removeTask(this.task()?.id);
  }
}
