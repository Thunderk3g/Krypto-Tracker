import { ApiService } from '../services/api.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formdata: any ={};
  
  submitted = false;
  isLoggedIn = false;
  errorMessage = '';
  isLoginFailed = false;

  constructor(private formBuilder: FormBuilder, private apiservice: ApiService,
    private tokenStorage: TokenStorageService ) { }

  ngOnInit() {
      this.formdata = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]],
      });
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        }
  }
  get f() { return this.formdata.controls; }



  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formdata.invalid) {
        return;
    }
  
  
    this.apiservice.login(this.formdata).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoggedIn = true;
      },

      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
