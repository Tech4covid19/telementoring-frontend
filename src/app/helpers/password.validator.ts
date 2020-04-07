import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

  static Validator(controle: AbstractControl) {
    const password = controle.value;
    const ucase = new RegExp("[A-Z]+");
    const lcase = new RegExp("[a-z]+");
    const num = new RegExp("[0-9]+");
    const esp = new RegExp("(?=.*[%@!#¨&}{,.^?~=+\\'\\´\\`\\<\\>\\=\\(\\)\\[\\]\\-_\\/*\\-+.\\|])");

    const ucaseItsValid = ucase.test(password);
    console.log("Senha: " + password + " - Tem maiusculo: " + ucaseItsValid);
    const lcaseItsValid = lcase.test(password);
    console.log("Senha: " + password + " - Tem minusculo: " + lcaseItsValid);
    const numItsValid = num.test(password);
    console.log("Senha: " + password + " - Tem número: " + numItsValid);
    const espItsValid = esp.test(password);
    console.log("Senha: " + password + " - Tem esp: " + espItsValid);

    const itsValid = (ucaseItsValid && lcaseItsValid && numItsValid && espItsValid);
    console.log("Senha: " + password + " - válido: " + itsValid);
    if (itsValid) {
      return null;
    }
    return { passwordInvalido: true };
  }
}
