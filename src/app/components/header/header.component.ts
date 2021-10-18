import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../User'
import { UserService } from '../../services/user.service';
import { AddUserPopupComponent } from '../add-user-popup/add-user-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Output() onAddUser: EventEmitter<User> = new EventEmitter()
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    role: ''
  }

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onCreate() {

    const data = this.user
    const dialogRef = this.dialog.open(AddUserPopupComponent, {
      width: '300px',
      data
    });


    dialogRef.afterClosed().subscribe(user => {
      if (user) {

        this.userService.addUser(user).subscribe(() => {
          this.user = user;
        })

      }
    })
  }
}

