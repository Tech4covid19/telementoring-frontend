import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const ucase = new RegExp("[A-Z]+");
    const lcase = new RegExp("[a-z]+");
    const num = new RegExp("[0-9]+");
    const esp = new RegExp("(?=.*[}{,.^?~=+\\-_\\/*\\-+.\\|])");
    const a = ucase.test(control.value);
    console.log("Senha: " + control.value + " - Tem maiusculo: " + a);
    const b = lcase.test(control.value);
    console.log("Senha: " + control.value + " - Tem minusculo: " + b);
    const c = num.test(control.value);
    console.log("Senha: " + control.value + " - Tem número: " + c);
    const d = esp.test(control.value);
    console.log("Senha: " + control.value + " - Tem esp: " + d);
    const forbidden = ucase.test(control.value) || lcase.test(control.value) || num.test(control.value);
    console.log("Senha: " + control.value + " - válido: " + forbidden);
    return forbidden ?
        { 'password':
          { value: control.value }
    } : null;
  }
}
