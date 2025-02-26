import { Component, computed, input, output } from '@angular/core';

import { User } from '../models';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });
  select = output<User>();

  onSelectUser() {
    this.select.emit(this.user());
  }
}
