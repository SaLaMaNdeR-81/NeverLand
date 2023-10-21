import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'User-Dashboard';

  theme : any ;

  constructor(){

    this.Set_theme()

  }

  // =======================

  Set_theme(){
    this.theme = localStorage.getItem('theme');

    if(!this.theme){
      localStorage.setItem('theme',"default")
    }
  }

}
