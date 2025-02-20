import { Component, input } from '@angular/core';

import { User } from '../models';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  user = input.required<User | null>();
}
