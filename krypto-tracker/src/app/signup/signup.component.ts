import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PassMatch } from '../_helpers/pass-match.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    formdata: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.formdata = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirm_password: ['', [Validators.required]],
            phonenumber: ['', [Validators.required, Validators.minLength(10),  Validators.pattern('(0|91)?[7-9][0-9]{9}')]],

        }, {
            validator: PassMatch('password', 'confirm_password')
        });
    }

    get f() { return this.formdata.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formdata.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formdata.value))
    }
}
