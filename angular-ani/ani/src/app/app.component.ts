import { Component } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { MatDialogConfig, MatDialog, MatDialogRef } from "@angular/material";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  ngOnInit() {
    firebase.initializeApp(environment.firebase);
  }
  title = "ani";
  auth(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened.
      });
  }
  signUp(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }
  isUp() {
    console.log(firebase.auth().currentUser);
    return firebase.auth().currentUser;
  }
}

@Component({
  selector: "pop-submit-user",
  templateUrl: "pop-submit-user.component.html"
})
export class PopUpSubmitUser {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(SubmitUser, dialogConfig);
  }
}

@Component({
  selector: "submit-user",
  templateUrl: "submit-user.component.html"
})
export class SubmitUser {
  constructor(public dialogRef: MatDialogRef<PopUpSubmitUser>) {}

  formpUserDetails = new FormGroup({
    userEmail: new FormControl(""),
    userPassword: new FormControl("")
  });

  onSubmit() {
    console.log(this.formpUserDetails.value.userEmail);
    const data = this.formpUserDetails.value;
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.formpUserDetails.value.userEmail,
          this.formpUserDetails.value.userPassword
        )
        .then(
          res => this.dialogRef.close(),
          err => reject(err)
        )
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    });
  }
}
