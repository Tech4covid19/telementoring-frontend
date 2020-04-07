import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarComponent } from '../../snack-bar/snack-bar.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackbar: SnackbarComponent,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createGroupForm();
  }

  onSubmit() {
    // stop here if form is invalid
    const email = this.resetForm.get("email");
    if (this.resetForm.invalid) {
      if (email.errors != null) {
        this.snackbar.openSnackBar(
          'Invalid or blank email !',
          'error'
        );
        return;
      }
    }

    this.authService.sendPasswordResetEmail(email.value)
      .then(
        data => {
          this.snackbar.openSnackBar(
            'The information was sent to your email. Please check !',
            'success'
          );
          this.router.navigate(['/login']);
        }
      ).catch(
        error => {
          console.log(error);
          this.snackbar.openSnackBar(
            error.message,
            'error'
          );
        }
      );
  }

  private createGroupForm() {
    this.resetForm = this.formBuilder.group(
      {
        email: new FormControl('', [Validators.required, Validators.email])
      }
    );
  }
}
