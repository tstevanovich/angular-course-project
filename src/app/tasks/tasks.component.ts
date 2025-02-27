import { Component, computed, input, signal } from '@angular/core';

import { NewTaskData, Task, User } from '../models';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

const dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31'
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31'
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary: 'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15'
  }
];

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  user = input.required<User | null>();
  tasks = signal<Task[]>(dummyTasks);
  isAddingTask = signal<boolean>(false);
  selectedUserTasks = computed(() => {
    return this.tasks().filter((task: Task) => task.userId === this.user()?.id);
  });

  onCompleteTask(id: string | undefined) {
    this.tasks.set(this.tasks().filter((task: Task) => task.id !== id));
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(task: NewTaskData) {
    this.tasks.set([
      ...this.tasks(),
      {
        id: new Date().getTime().toString(),
        userId: this.user()?.id || '',
        ...task
      }
    ]);
    this.isAddingTask.set(false);
  }
}
