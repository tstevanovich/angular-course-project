import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '../../models';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  user = input.required<User | null>();
  close = output<void>();
  enteredTitle = model<string>('');
  enteredSummary = model<string>('');
  enteredDate = model<string>('');

  constructor(private _tasksService: TasksService) {}

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this._tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDate()
      },
      this.user()
    );
    this.close.emit();
  }
}
