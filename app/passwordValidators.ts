import { FormGroup, FormControl } from '@angular/forms';

export class PasswordValidators {
    static confirmPasswordShouldMatch(formGroup: FormGroup) {
        var newPassword = formGroup.controls['newPassword'].value;
        var confirmPassword = formGroup.controls['confirmPassword'].value;

        if (newPassword == '' || confirmPassword == '') {
            return null;
        }

        if (newPassword != confirmPassword) {
            return { confirmPasswordShouldMatch: true }
        }

        return null;
    }

    static shouldBeValid(formControl: FormControl) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (formControl.value != 'rkiguti') {
                    resolve({ shouldBeValid: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}