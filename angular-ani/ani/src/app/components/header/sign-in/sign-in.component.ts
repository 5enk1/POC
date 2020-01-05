import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {
  MatDialogConfig,
  MatDialogRef,
  MatDialog
} from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  currentUser: firebase.User;
  constructor(public auth: AuthService, public dialog: MatDialog) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(SubmitUserComponent, dialogConfig);
  }
}

@Component({
  templateUrl: 'submit-user.component.html'
})
export class SubmitUserComponent {
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    public auth: AuthService
  ) {}

  formpUserDetails = new FormGroup({
    userEmail: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    userPassword: new FormControl('')
  });

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.formpUserDetails.valid) {
      this.auth
        .login(
          this.formpUserDetails.value.userEmail,
          this.formpUserDetails.value.userPassword
        )
        .then(
          res => this.close(),
          err => console.error(err)
        );
    }
  }
}
