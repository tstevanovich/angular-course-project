import { Component, input, output } from '@angular/core';

import { Task } from '../../models';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
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
