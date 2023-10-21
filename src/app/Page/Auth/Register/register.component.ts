import { Component , EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'Auth-Register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss' ,'../Auth.Page.scss']
})
export class Auth_Register {

  @Output() AuthPageSelected = new EventEmitter<string>();

  constructor(){

  }

  onSelect(feature : string){
    this.AuthPageSelected.emit(feature);
  }

}
