import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { User } from './models';
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
  selectedUser = signal<User | null>(null);

  onSelectUser(user: User) {
    this.selectedUser.set(user);
  }
}
