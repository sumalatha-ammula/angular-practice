import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  reg: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.reg = this.formbuilder.group({
      first: new FormControl('', [Validators.required]),
      last: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', Validators.required),
    });
  }
  
  

 
  ngOnInit(): void {}
}
