import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../User';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'popup',
  templateUrl: 'add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.scss']
})
export class AddUserPopupComponent implements OnInit {

  //valiadators
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  role = new FormControl('', [Validators.required]);
  birthDate = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {

      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // end validators
  user!: User
  constructor(
    public dialogRef: MatDialogRef<AddUserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit(): void {
    if (!this.data) {
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        role: ''
      }
    } else {
      this.user = {
        id: this.data.id,
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        email: this.data.email,
        birthDate: this.data.birthDate,
        role: this.data.role
      }
    }
  }

  onOkClick() {
    this.dialogRef.close(this.user);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(f: NgForm) {
    console.log(f)
  }
}

