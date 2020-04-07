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
  constructor(
    private formBuilder: FormBuilder,
    private snackbar: SnackbarComponent,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createGroupForm();
  }

  onSubmit() {
    /**
      Após implementar a chamada do backend, pode retirar estas mensagens

      1º parametro
        Mensagem que deseja que aparece, pode ser que venha do servidor ou que vc digita por aqui mesmo.
      2º parametro
        Se tiver erro no retorno do back end, deve alterar para this.openSnackBar('mat-snack-bar-container-error');
        se tiver não tiver retorno do back end, deve alterar para this.openSnackBar('mat-snack-bar-container--sucess')
    */
    this.snackbar.openSnackBar(
      'Thanks for completing your profile. The dat will be validated and you will receive an e-mail of confirmation !',
      'mat-snack-bar-container-sucess'
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
          Validators.minLength(8),
          Validators.maxLength(12),
          PasswordValidator()
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
}
