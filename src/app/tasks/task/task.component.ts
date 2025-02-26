import { Component, input, output } from '@angular/core';

import { Task } from '../../models';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  task = input.required<Task | null>();
  complete = output<string | undefined>();

  onCompleteTask() {
    this.complete.emit(this.task()?.id);
  }
}
