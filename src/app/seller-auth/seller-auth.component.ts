import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin=false
  
  signUp(data:object):void{
    console.warn(data)
  

  }
  openLogin(){
    this.showLogin=true

  }
  openSignup(){
    this.showLogin=false

  }

}
