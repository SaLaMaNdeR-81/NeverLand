import { Component } from '@angular/core';

@Component({
  selector: 'App-Dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss']
})
export class App_Dashboad {

  Sidebar_Stat : boolean = true ;
  Token : any = localStorage.getItem("Token") ;
  Logged :any ;

  constructor(){

    this.Check_Token()

  }

  onSidebar_Toggle_Change(){
    this.Sidebar_Stat = !this.Sidebar_Stat;
  }

// =============             =============
//              =============
//               Check Token
//              =============
// =============             =============

  Check_Token():void{

    if(!this.Token){
      document.location = "/auth"
    }

    const data = {
      token : this.Token
    }

    fetch('http://localhost:3000/auth/check-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set Content-Type header to indicate JSON data
      },
      body: JSON.stringify(data) // Convert object to JSON string
    })
    .then(response => response.json())
    .then(parsedData => {

      console.log(parsedData);

    })
    .catch(error => console.error(error));

  }

}
