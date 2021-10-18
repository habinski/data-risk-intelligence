import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { AddUserPopupComponent } from '../add-user-popup/add-user-popup.component'

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {
  panelOpenState = false;
  @Input() user!: User;
  @Input() index!: number;

  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter()
  @Output() onModifyUserInfo: EventEmitter<User> = new EventEmitter()

  constructor(public dialog: MatDialog, private userService: UserService) { }


  onDelete(user: User) {
    this.onDeleteUser.emit(user)
  }
  onUpdate(user: User) {
    const data = this.user

    //open dialog
    const dialogRef = this.dialog.open(AddUserPopupComponent, {
      width: '300px',
      data
    });

    dialogRef.afterClosed().subscribe(user => {

      if (user) {
        this.userService.updateUser(user).subscribe(() => {
          this.user = user;
        })
      }
    })
  }
}
