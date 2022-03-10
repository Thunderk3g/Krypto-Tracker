import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
} from '@angular/forms';import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  tokenStorageService: any;
  currentUser: any;
  updatedata: any;
  submitted: boolean;
  apiservice: any;
  errorCreated: boolean;
  errorMessage: any;
  tokenStorage: any;
  isLoggedIn: boolean;
  
  constructor(private formBuilder: FormBuilder,private token: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.currentUser = this.token.getUser();
   this.updatedata = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      photo: ['',[Validators.required]]
  });
  }
  onFileChanged(event:any) {
    const file = event.target.files[0]
  }
  onSubmit(): void {

    this.submitted = true;
    // stop here if form is invalid
    if (this.updatedata.invalid) {
        return;
    }
  
  
    this.apiservice.updateCred(this.updatedata).subscribe(
      (data: any) => {      
        window.location.reload();
      },
      (err: { error: { message: any; }; }) => {
        this.errorCreated = true;
        this.errorMessage = err.error.message;
      });
     
  }
}
