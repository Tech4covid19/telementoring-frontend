import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { PasswordValidator } from 'src/app/helpers/password.validator';
import { SnackbarComponent } from '../../snack-bar/snack-bar.component';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackbar: SnackbarComponent,
  ) { }

  ngOnInit(): void {
    this.createGroupForm();
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      if (this.registerForm.get("email").errors != null) {
        this.snackbar.openSnackBar(
          'Invalid or blank email !',
          'error'
        );
        return;
      }
      if (this.registerForm.get("password").errors != null) {
        // When changing password policies, you must change this return message and change the
        // MessagePasswordInvalido () method of the PasswordValidator class.
        const password = this.registerForm.get("password").errors;
        if (password.required) {
          this.snackbar.openSnackBar(
            'Password cannot be null !',
            'error'
          );
          return;
        } else if (password.minlength) {
          this.snackbar.openSnackBar(
            'Password must be at least ' +
            password.minlength.requiredLength
            + ' characters long !',
            'error'
          );
          return;
        } else if (password.maxlength) {
          this.snackbar.openSnackBar(
            'Password must be a maximum of ' +
            password.maxlength.requiredLength
            + ' characters long !',
            'error'
          );
          return;
        } else if (password.passwordInvalido) {
          this.snackbar.openSnackBar(
            PasswordValidator.MensagemPasswordInvalido(),
            'error'
          );
          return;
        }
      } else if (this.registerForm.get("confirmPassword").errors != null) {
        const confirmPassword = this.registerForm.get("confirmPassword").errors;
        if (confirmPassword.required) {
          this.snackbar.openSnackBar(
            'Password confirmation cannot be null !',
            'error'
          );
          return;
        } else if (confirmPassword.mustMatch) {
          this.snackbar.openSnackBar(
            'Password and password confirmation must be the same !',
            'error'
          );
          return;
        }
      }
      return;
    }

    this.authService.register(
      this.registerForm.value.email,
      this.registerForm.value.password
    ).then(
      data => data
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
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
            PasswordValidator.Validator
          ])
        ),
        confirmPassword: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }
}
