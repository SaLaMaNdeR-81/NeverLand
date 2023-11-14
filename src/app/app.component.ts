import { Component } from '@angular/core';

import { TokenService } from './@Core/Services/Token.Service';
import { TitleService } from './@Core/Services/Title.Service';

const tokenService = new TokenService()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'User-Dashboard';

  theme : any ;
  Token : any = localStorage.getItem("Token")

  constructor(private TitleService:TitleService){

    this.TitleService.ResetTitle()
    this.Set_theme()
    this.CheckToken()

  }

  // =======================
  
  Set_theme(){
    this.theme = localStorage.getItem('theme');
    
    if(!this.theme){
      localStorage.setItem('theme',"default")
    }
  }

  // =======================
  
  CheckToken():void{

      const data = {
        token: this.Token
      }

      fetch('http://localhost:3000/auth/check-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(parsedData => {

      console.log(parsedData);

      if(parsedData.message !== "Token is Active"){
        tokenService.removeToken()
      }

    })
    .catch(error => console.error(error));

    }

}
