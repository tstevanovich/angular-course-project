import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USERS;
  onSelectedUser(id: string) {
    console.log('Selected user id:', id);
  }
}
