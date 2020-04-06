import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { SnackbarComponent } from '../snack-bar/snack-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-profile',
  templateUrl: './medical-profile.component.html',
  styleUrls: ['./medical-profile.component.scss'],
})
export class MedicalProfileComponent implements OnInit {
  medicalProfileForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public snackbar: SnackbarComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createGroupForm();
  }

  onSubmit() {
    this.openSnackBar('mat-snack-bar-container-sucess');
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 3600);
  }

  private createGroupForm() {
    this.medicalProfileForm = this.formBuilder.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        sex: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        hospital: new FormControl('', [Validators.required]),
        telephone: new FormControl('', [Validators.required]),
        cellPhone: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        speciality: new FormControl('', [Validators.required]),
        confirmPassword: ['', Validators.required],
        birth: new FormControl('', [Validators.required]),
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  private openSnackBar(color: any) {
    this.snackbar.openSnackBar(
      'Thanks for completing your profile. The dat will be validated and you will receive an e-mail of confirmation !',
      color
    );
  }
}
