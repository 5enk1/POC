import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {
  MatDialogConfig,
  MatDialogRef,
  MatDialog
} from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(
    public auth: AuthService,
    public dialog: MatDialog,
    public ani: AnimeProviderService
  ) {}
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

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(public auth: AuthService, public dialog: MatDialog) {}
  openDialogForNewUser() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(SubmitNevUserComponent, dialogConfig);
  }
}

@Component({
  templateUrl: 'submit-new-user.component.html'
})
export class SubmitNevUserComponent {
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    public authenticationProvider: AuthService,
    public animeProvider: AnimeProviderService
  ) {}

  formpNewUserDetails = new FormGroup({
    newUserEmail: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    newUserPassword: new FormControl('', Validators.required)
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
