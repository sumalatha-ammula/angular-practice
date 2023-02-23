import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
FormControl;
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
  regForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.regForm = this.formbuilder.group(
      {
        FirstName: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        LastName: new FormControl('', [Validators.required]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.maxLength(8),
        ]),
        conpassword: new FormControl('', Validators.required),
        skills: new FormArray([]),
      },
      { validators: this.Mustmatch('password', 'conpassword') }
    );
  }

  get skills() {
    return this.regForm.get('skills') as FormArray;
  }
  Mustmatch(password: any, conpassword: any) {
    console.log('form', FormGroup);
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const conpasswordControl = formGroup.controls[conpassword];
      if (
        conpasswordControl.errors &&
        !conpasswordControl.errors['MustMatch']
      ) {
        return;
      }
      if (passwordControl.value !== conpasswordControl.value) {
        conpasswordControl.setErrors({ Mustmatch: true });
      } else conpasswordControl.setErrors(null);
    };
  }
  ngOnInit(): void {}

  /*  setValue() {
    this.regForm.setValue({
      FirstName: 'suma',
      LastName: 'ammula',
      Email: 'sumalatha@gmail.com',
      password: '12345',
      skills: this.skills.value,
    });
  } */
  patchValue() {
    this.regForm.patchValue({
      FirstName: 'Akhil',
    });
  }
  addSkills() {
    this.skills.push(new FormControl());
  }

  onSubmit() {
    alert(JSON.stringify(this.regForm.value));
  }
}
