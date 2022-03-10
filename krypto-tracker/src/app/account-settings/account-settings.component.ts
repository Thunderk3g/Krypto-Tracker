import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
} from '@angular/forms';import { TokenStorageService } from '../services/token-storage.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  tokenStorageService: any;
  currentUser: any;
  updatedata: any ={};
  submitted: boolean;
  apiservice: any;
  errorCreated: boolean;
  errorMessage: any;
  tokenStorage: any;
  isLoggedIn: boolean;
  selectedFile: File ;

  constructor(private formBuilder: FormBuilder,private token: TokenStorageService, private apiService: ApiService) { 
    this.currentUser = this.token.getUser();

  }

  ngOnInit(){
   this.updatedata = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      photo: ['',[Validators.required]]
  });
  if (this.token.getToken()) {
    this.isLoggedIn = true;
  }
  }

  onFileChanged(event:any) {
    this.updatedata.photo = <File>event.target.files[0];
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.updatedata.invalid) {
        return;
    }
   
    this.apiService
      .updateCred(
        {
          name: this.updatedata.name,
          address: this.updatedata.address,
          photo: this.updatedata.photo,
          userId: this.currentUser.email
        }
      )
  }  
  }

