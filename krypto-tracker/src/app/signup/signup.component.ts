import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TokenStorageService } from '../services/token-storage.service';
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
    formdata: any ={}; 
    accountCreated = false ;   
    submitted = false;
    errorMessage = '';
    data: any;
    constructor(private formBuilder: FormBuilder ,private apiservice: ApiService) { }

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

    onSubmit(): void {
        this.submitted = true;
        // stop here if form is invalid
        if (this.formdata.invalid) {
            return;
        }
        this.apiservice.register(this.formdata).subscribe(
          (data) => {
            this.accountCreated = true;
            this.data = data.body;
          },
          (err) => {
            this.errorMessage = err.error.message;
          }
        );
      }
    
}
