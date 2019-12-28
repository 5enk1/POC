import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'pop-up-add-new-series',
  templateUrl: 'pop-up-component.html',

})
export class AddNewSeries {
  constructor(public dialog: MatDialog) {}
  title: string = "add new"
  openDialog() {
    this.dialog.open(AddNewSeriesDialog);
  }
}

@Component({
  selector: 'new-series-dialog',
  templateUrl: 'dialog-add-new.html',
})
export class AddNewSeriesDialog {
  constructor() {}

}
