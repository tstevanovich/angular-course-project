import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = signal<string>('u1');
  selectedUserName = signal<string>('Jasmine Washington');

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
    this.selectedUserName.set(this.users.find((user) => user.id === id)!.name);
  }
}
