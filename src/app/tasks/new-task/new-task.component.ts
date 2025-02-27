import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTaskData } from '../../models';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  cancelAddTask = output<void>();
  add = output<NewTaskData>();
  enteredTitle = model<string>('');
  enteredSummary = model<string>('');
  enteredDate = model<string>('');

  onCancel() {
    this.cancelAddTask.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate()
    });
  }
}
