import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  cancelAddTask = output<void>();

  onCancel() {
    this.cancelAddTask.emit();
  }
}
