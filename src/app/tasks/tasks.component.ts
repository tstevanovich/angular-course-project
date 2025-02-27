import { Component, computed, input, signal } from '@angular/core';

import { User } from '../models';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  user = input.required<User | null>();
  isAddingTask = signal<boolean>(false);
  selectedUserTasks = computed(() => {
    return this._tasksService.getUserTasks(this.user()?.id);
  });

  constructor(private _tasksService: TasksService) {}

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
