import { Component} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { LoadingService } from '../@Core/Services/Loading.Service';

@Component({
  selector: 'App-Dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss'],
  animations: [
    trigger('slideInOut', [
      // state('true', style({
      //   transform: 'translate3d(0, 0, 0)'
      // })),
      state('false', style({
        // transform: 'translate3d(-100%, 0, 0)',
        width: '0' // Width becomes 0 when 'out'
      })),
      transition('true => false', animate('1000ms')),
      // transition('false => true', animate('1000ms ease-in'))
    ])
  ],
})
export class App_Dashboad {

  SelectedPage : string = "Profile"
  Sidebar_Stat : boolean = true ;
  Token : any = localStorage.getItem("Token") ;
  Logged :any ;

  constructor(private loadingService: LoadingService){

    this.Check_Token()

  }

  onSidebar_Toggle_Change(){
    this.Sidebar_Stat = !this.Sidebar_Stat;
  }

  onChange(feature : string){
    this.SelectedPage = feature ;
  }

  fetchData() {
    this.loadingService.showLoader();
    // Perform your data fetching logic here
    // When data fetching is complete, hide the loader
    this.loadingService.hideLoader();
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
