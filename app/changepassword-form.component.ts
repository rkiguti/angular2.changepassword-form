import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PasswordValidators } from './passwordValidators';

@Component({
    selector: 'changepassword-form',
    templateUrl: 'app/changepassword-form.component.html',
    styles: [`
        input.ng-touched.ng-invalid {
            border: 1px solid red;
        }
    `]
})
export class ChangePasswordFormComponent {

    changePasswordForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.changePasswordForm = fb.group({
            username: ['', Validators.required, PasswordValidators.shouldBeValid],
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([Validators.required, Validators.minLength(5)]) ],
            confirmPassword: ['', Validators.required]
        }, { validator: PasswordValidators.confirmPasswordShouldMatch });
    }

    onChangePassword() {
        var oldPassword = this.changePasswordForm.controls['oldPassword'];
        if (oldPassword.value != '1234') {
            oldPassword.setErrors({ validOldPassword: true });
        } else {
            alert('Password changed');
        }
    }
}