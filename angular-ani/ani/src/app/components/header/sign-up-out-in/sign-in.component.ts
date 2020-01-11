import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';

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
    this.dialog.open(SignInFormComponent, dialogConfig);
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
    this.dialog.open(SignUpFormComponent, dialogConfig);
  }
}
