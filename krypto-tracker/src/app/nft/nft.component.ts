import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {
  formdata :any;
  data: any;
  errorCreated = false;
  errorMessage: '';
  currentUser: any;
  userId: any;
  li: any;
  currentToken: string;
  constructor(private formBuilder: FormBuilder,private apiService: ApiService, private token: TokenStorageService ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (this.currentUser != null){ 
      this.userId = this.currentUser.email
      this.getnft();
      }
    this.formdata = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      icon:['', [Validators.required]]
  });
  
  }
  showModal = false;
  showDelete = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  toggleDelte(){
    this.showDelete = !this.showDelete;
  }
  onSubmit(){
    this.apiService.addNFT(this.formdata, this.userId ).subscribe(
      (data) => {
        this.data = data.body;
        alert( 'Hello ' + '\n NFT has been added to your collection');   
        this.showModal = false; 
        window.location.reload();
      },
      (err) => {
        this.errorCreated = true;
        this.errorMessage = err.error.message;
      }
    )
  }
  getnft(){
    this.apiService.getNFT({
      userId: this.currentUser.email
    }).subscribe((data) => {
      this.li = data;
      console.log(data);
    });
  }
  delFav(index:any){
    this.apiService.delNFT({
      userId: this.currentUser.email,
      name:this.li[index].name
    }).subscribe((data) => {
      this.li = data;
      console.log(data);
    });
    window.location.reload();
  }
}
