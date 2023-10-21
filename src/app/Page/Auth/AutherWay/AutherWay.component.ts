import { Component , EventEmitter , Output } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'Auth-AutherWay',
  templateUrl: './AutherWay.component.html',
  styleUrls: ['./AutherWay.component.scss' ,'../Auth.Page.scss']
})

export class Auth_AutherWay {

  @Output() AuthPageSelected = new EventEmitter<string>();
  user : any;
  loggedIn : boolean = false;

  constructor( private authService:SocialAuthService ){  }

  // ================================
  
  // =====Sign With Google======

  onSignWith_Google(){
    console.log('Hello World');

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)

  }

  // =====Sign With GitHub======

  onSignWith_GitHub(){
    console.log('Hello World');

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)

  }

  // ================================

  onSelect(feature : string){
    this.AuthPageSelected.emit(feature);
  }

}
