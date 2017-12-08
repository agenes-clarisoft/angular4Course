import { Component} from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from "./password.validators";

@Component({
  selector: 'forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.checkOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.mustMatch
    });
  }

  get oldPassword() { return this.form.get('oldPassword'); }

  get newPassword() { return this.form.get('newPassword'); }

  get confirmPassword() { return this.form.get('confirmPassword'); }
}
