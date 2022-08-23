import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passMisMatch(controls:AbstractControl):ValidationErrors | null{
    const password = controls.get('password')?.value;
    const confirmPassword = controls.get('confirmPassword')?.value;
    if(password != confirmPassword){
        return{'passMisMatch':true};
    }
    return null;
}