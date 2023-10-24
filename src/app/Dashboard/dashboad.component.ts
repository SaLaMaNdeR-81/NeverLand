import { Component } from '@angular/core';

@Component({
  selector: 'App-Dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss']
})
export class App_Dashboad {

  SelectedPage : string = "Profile"
  Sidebar_Stat : boolean = true ;
  Token : any = localStorage.getItem("Token") ;
  Logged :any ;

  constructor(){

    this.Check_Token()

  }

  onSidebar_Toggle_Change(){
    this.Sidebar_Stat = !this.Sidebar_Stat;
  }

  onChange(feature : string){
    this.SelectedPage = feature ;
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
  }

}
