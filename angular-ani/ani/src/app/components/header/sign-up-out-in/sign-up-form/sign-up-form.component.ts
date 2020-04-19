import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent {
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    public authenticationProvider: AuthService
  ) {}

  formpNewUserDetails = new FormGroup({
    newUserEmail: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    newUserPassword: new FormControl('', Validators.required),
  });

  signUp() {
    this.authenticationProvider.signUp(
      this.formpNewUserDetails.value.newUserEmail,
      this.formpNewUserDetails.value.newUserPassword
    );
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}
