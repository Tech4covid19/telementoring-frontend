import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { PasswordValidator } from 'src/app/helpers/password.validator';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-medical-profile',
  templateUrl: './medical-profile.component.html',
  styleUrls: ['./medical-profile.component.scss'],
})
export class MedicalProfileComponent implements OnInit {
  medicalProfileForm: FormGroup;
  hide: any;

  constructor(
    private formBuilder: FormBuilder,
    private snackbar: SnackbarComponent,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createGroupForm();
  }

  onSubmit() {
    if (this.medicalProfileForm.invalid) {
      if (this.medicalProfileForm.get("email").errors != null) {
        this.snackbar.openSnackBar(
          'Invalid or blank email !',
          'error'
        );
        return;
      }
      if (this.medicalProfileForm.get("sex").errors != null) {
        this.snackbar.openSnackBar(
          'You must choose a gender !',
          'error'
        );
        return;
      } else if (this.medicalProfileForm.get("name").errors != null) {
        this.snackbar.openSnackBar(
          'Name is required !',
          'error'
        );
        return;
      } else if (this.medicalProfileForm.get("country").errors != null) {
        this.snackbar.openSnackBar(
          'Country is required !',
          'error'
        );
        return;
      } else if (this.medicalProfileForm.get("surname").errors != null) {
        this.snackbar.openSnackBar(
          'Surname is required !',
          'error'
        );
        return;
      } else if (this.medicalProfileForm.get("hospital").errors != null) {
        this.snackbar.openSnackBar(
          'Hospital is required !',
          'error'
        );
        return;
      } else if (this.medicalProfileForm.get("telephone").errors != null) {
        this.snackbar.openSnackBar(
          'Telephone is required !',
          'error'
        );
        return;
      } else if (this.medicalProfileForm.get("cellPhone").errors != null) {
        this.snackbar.openSnackBar(
          'CellPhone is required !',
          'error'
        );
        return;
      } else if (this.medicalProfileForm.get("password").errors != null) {
        // When changing password policies, you must change this return message and change the
        // MessagePasswordInvalido () method of the PasswordValidator class.
        const password = this.medicalProfileForm.get("password").errors;
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
      } else if (this.medicalProfileForm.get("speciality").errors != null) {
        this.snackbar.openSnackBar(
          'Speciality is required !',
          'error'
        );
        return;
      } else if (this.medicalProfileForm.get("confirmPassword").errors != null) {
        const confirmPassword = this.medicalProfileForm.get("confirmPassword").errors;
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
      } else if (this.medicalProfileForm.get("birth").errors != null) {
        this.snackbar.openSnackBar(
          'Birth is required !',
          'error'
        );
        return;
      }
    } else {
      /**
      Após implementar a chamada do backend, pode retirar estas mensagens

      1º parametro
        Mensagem que deseja que aparece, pode ser que venha do servidor ou que vc digita por aqui mesmo.
      2º parametro
        Se tiver erro no retorno do back end, deve alterar para this.openSnackBar(mensagem que deseja, 'error');
        se tiver não tiver retorno do back end, deve alterar para this.openSnackBar(mensagem que deseja, 'success')
      */
      this.snackbar.openSnackBar(
        'Thanks for completing your profile. The dat will be validated and you will receive an e-mail of confirmation !',
        'success'
      );
      /**
      Após implementar a chamada do backend, pode retirar estas mensagens

      Este setTimeout só deve ser chamado se o retorno do backend for ok e sem erro de regras de negócio,
      por isso após inserir a chamado do backenda, deve alterar aqui
      */
      /*setTimeout(() => {
        this.authService.logout();
      }, 3600);*/
    }
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
        // When changing password policies, you must change this return message and change the
        // MessagePasswordInvalido () method of the PasswordValidator class.
        password: new FormControl('',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
            PasswordValidator.Validator
          ])
        ),
        speciality: new FormControl('', [Validators.required]),
        confirmPassword: ['', Validators.required],
        birth: new FormControl('', [Validators.required]),
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
}
