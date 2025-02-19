import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.id());
  }
}
