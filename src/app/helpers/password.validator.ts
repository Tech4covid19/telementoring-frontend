import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

  // When changing password policies, you must change this return message and change the
  // MessagePasswordInvalido () method of the PasswordValidator class.
  static Validator(controle: AbstractControl) {
    const password = controle.value;
    const ucase = new RegExp("[A-Z]+");
    const lcase = new RegExp("[a-z]+");
    const num = new RegExp("[0-9]+");
    const esp = new RegExp("(?=.*[%@!#¨&}{,.^?~=+\\'\\´\\`\\<\\>\\=\\(\\)\\[\\]\\-_\\/*\\-+.\\|])");
    const itsValid = (ucase.test(password) && lcase.test(password)
      && num.test(password) && esp.test(password));
    console.log("Senha: " + password + " - válido: " + itsValid);
    if (itsValid) {
      return null;
    }
    return { passwordInvalido: true };
  }

  // When changing password policies, you must change this return message and change the
  // MessagePasswordInvalido () method of the PasswordValidator class.
  static MensagemPasswordInvalido() {
    return 'The password does not comply with the policies. You must have at least: '
      + '1 number, '
      + '1 capital character, '
      + '1 small character, '
      + '1 special character, '
      + 'at least 8 characters, '
      + 'maximum 12 characters!'
  }
}
