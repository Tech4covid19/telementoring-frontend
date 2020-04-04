import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'telemonitoring';

  public loggedIn: boolean;

  constructor(public dialog: MatDialog, public authService: AuthService) {}

  public logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Do you want to exit the system ?',
    };
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((sair: any) => {
      if (sair !== 'close') {
        this.authService.logout();
      }
    });
  }

  public isLoggedIn() {
    this.loggedIn = this.authService.isLoggedIn;
    return this.loggedIn;
  }
}
