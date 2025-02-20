import { Component, computed, input, output } from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = input.required<User>();
  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
