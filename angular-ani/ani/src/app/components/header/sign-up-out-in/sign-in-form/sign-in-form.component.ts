import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent {
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    public authenticationProvider: AuthService,
    public animeProvider: AnimeProviderService
  ) {}

  formpUserDetails = new FormGroup({
    userEmail: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    userPassword: new FormControl(''),
  });

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.formpUserDetails.valid) {
      this.authenticationProvider
        .login(
          this.formpUserDetails.value.userEmail,
          this.formpUserDetails.value.userPassword
        )
        .then(
          (res) => this.close(),
          (err) => console.error(err)
        );
    }
  }
}
