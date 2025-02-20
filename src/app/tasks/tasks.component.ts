import { Component, input } from '@angular/core';

import { User } from '../models';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  user = input.required<User | null>();
}
