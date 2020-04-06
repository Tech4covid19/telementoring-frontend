import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-medical-profile',
  templateUrl: './medical-profile.component.html',
  styleUrls: ['./medical-profile.component.scss'],
})
export class MedicalProfileComponent implements OnInit {
  medicalProfileForm: FormGroup;
  durationInSeconds = 5;
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createGroupForm();
  }

  onSubmit() {
    this.openSnackBar();
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

  private openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
