import { Injectable, signal } from '@angular/core';

import { NewTaskData, Task, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = signal([
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
  ]);

  constructor() {
    this.tasks.set(
      localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks') || '') : this.tasks()
    );
  }

  getUserTasks(userId: string | undefined) {
    return this.tasks().filter((task: Task) => task.userId === userId);
  }

  addTask(task: NewTaskData, user: User | null) {
    this.tasks.set([
      ...this.tasks(),
      {
        id: new Date().getTime().toString(),
        userId: user?.id || '',
        ...task
      }
    ]);
    this.saveTasks();
  }

  removeTask(taskId: string | undefined) {
    this.tasks.set(this.tasks().filter((task: Task) => task.id !== taskId));
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
