import { Component , EventEmitter , Output } from '@angular/core';

import { TitleService } from 'src/app/@Core/Services/Title.Service';
import { AlertMessageService } from 'src/app/@Core/Services/AlertMessage.Service';

@Component({
  selector: 'Auth-Register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss' ,'../Auth.Page.scss']
})
export class Auth_Register {

  @Output() AuthPageSelected = new EventEmitter<string>();

  constructor(private TitleService:TitleService ,private AlertMessageService:AlertMessageService ){
    this.TitleService.SetTitle("Register")
  }

  onSelect(feature : string){
    this.AuthPageSelected.emit(feature);
  }

  onSubmit(){

    this.AlertMessageService.AddAlert({message:"Sorry , Registy is Desible ." ,type:"Error"})

  }

}
