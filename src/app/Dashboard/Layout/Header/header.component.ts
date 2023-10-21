import { Component , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'Dashboard-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Dashboard_Header {


  @Output() Sidebar_Toggle = new EventEmitter<boolean>();
  Sidebar_Stat : boolean = true

  theme : any = ""

  
  constructor(){
    
    this.theme = localStorage.getItem('theme');
    console.log(this.theme);

  }

  onToggle_Sidebar(){
    this.Sidebar_Toggle.emit();
    this.Sidebar_Stat = !this.Sidebar_Stat
  }

}
