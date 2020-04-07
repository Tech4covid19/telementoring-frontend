import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { SnackbarComponent } from '../../snack-bar/snack-bar.component';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackbar: SnackbarComponent,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ])
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      if (this.loginForm.get("email").invalid || this.loginForm.get("password").invalid) {
        this.snackbar.openSnackBar(
          'Invalid email or password !',
          'mat-snack-bar-container-error'
        );
      }
      return;
    }

    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).then(
      data => data
    ).catch(
      error => {
        console.log(error);
        this.snackbar.openSnackBar(
          error.message,
          'mat-snack-bar-container-error'
        );
      }
    );
  }
}
