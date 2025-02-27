import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  cancelAddTask = output<void>();
  enteredTitle = model<string>('');
  enteredSummary = model<string>('');
  enteredDate = model<string>('');

  onCancel() {
    this.cancelAddTask.emit();
  }
}
