import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../User'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})

export class UserTableComponent implements OnInit {
  users: User[] = []
  // import user service to comunicate with API
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // show users
    this.userService.getUsers().subscribe((users) => this.users = users)
  }
  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => (this.users = this.users.filter((u) => u.id !== user.id)))
  }
  modifyUserInfo(user: User) {
    this.userService.updateUser(user).subscribe()
  }
  addUser(user: User) {
    this.userService.addUser(user).subscribe((user) => (this.users.push(user)))
  }
}
