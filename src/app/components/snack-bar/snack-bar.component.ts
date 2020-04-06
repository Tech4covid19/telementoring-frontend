import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  timeOut = 1500;

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  /**
   * @param message = Message you want to appear
   * @param className = Can be: mat-snack-bar-container-sucess or mat-snack-bar-container-error
   * @param action = Name of the action that must be performed when clicking on the text.
   * @param verticalPosition = Vertical position. It can be: 'top' or 'bottom'. Default: 'bottom'
   * @param horizontalPosition = Horisontal position. It can be: 'start' | 'center' | 'end' | 'left' | 'right'. Default: 'center'
   */
  openSnackBar(
    message: string,
    className: string,
    action?: string,
    verticalPosition?: any,
    horizontalPosition?: any
  ) {
    verticalPosition =
      verticalPosition === null || verticalPosition === undefined
        ? 'bottom'
        : verticalPosition;
    horizontalPosition =
      horizontalPosition === null || horizontalPosition === undefined
        ? 'center'
        : horizontalPosition;
    this.snackBar.open(message, action, {
      duration: this.timeOut,
      verticalPosition: verticalPosition,
      horizontalPosition: horizontalPosition,
      panelClass: [className],
    });
  }
}
