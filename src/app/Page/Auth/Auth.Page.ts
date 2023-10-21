import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'Page-Auth',
  templateUrl: './Auth.Page.html',
  styleUrls: ['./Auth.Page.scss']
})
export class Page_Auth {

  user: any;
  loggedIn: any = false;
  LoadedFeature = "Login"

  Check_Token : any = localStorage.getItem("Token") 

  constructor(){

    if(this.Check_Token){
      document.location = "/dashboard"
    }

  }

  onChange(feature : string){
    this.LoadedFeature = feature ;
  }


}
