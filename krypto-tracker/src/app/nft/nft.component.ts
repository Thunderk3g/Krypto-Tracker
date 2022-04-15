import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../services/api.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css'],
})
export class NftComponent implements OnInit {
  formdata: any;
  data: any;
  errorCreated = false;
  errorMessage: '';
  currentUser: any;
  userId: any;
  li: any;
  currentToken: string;
  isEmpty: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private token: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (this.currentUser != null) {
      this.userId = this.currentUser.email;
      this.getnft();
    }
    this.formdata = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      icon: ['', [Validators.required]],
    });
  }
  showModal = false;
  showDelete = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }

  onSubmit() {
    Swal.fire({
      title: 'Do you want to mint a new NFT?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Mint',
      denyButtonText: `Don't Mint`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.apiService.addNFT(this.formdata, this.userId).subscribe(
          (data) => {
            this.data = data.body;
            this.showModal = false;
            Swal.fire('Added to your collection!', '', 'success').then(
              (result) => {
                window.location.reload();
              }
            );
          },
          (err) => {
            this.errorCreated = true;
            this.errorMessage = err.error.message;
          }
        );
      } else if (result.isDenied) {
        Swal.fire('The NFT has not been minted', '', 'info');
      }
    });
  }
  getnft() {
    this.apiService
      .getNFT({
        userId: this.currentUser.email,
      })
      .subscribe((data) => {
        this.li = data;
        if (typeof this.li !== 'undefined' && this.li.length === 0) {
          this.isEmpty = true;
        }
      });
  }
  delFav(index: any) {
    Swal.fire({
      title: 'Do you want to add to delete this NFT?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.apiService
          .delNFT({
            userId: this.currentUser.email,
            name: this.li[index].name,
          })
          .subscribe((data) => {});
        Swal.fire('Deleted!', '', 'success').then((result) => {
          window.location.reload();
        });
      } else if (result.isDenied) {
        Swal.fire('The NFT has not been deleted', '', 'info');
      }
    });
  }
}
