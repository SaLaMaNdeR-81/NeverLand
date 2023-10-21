import { Component , Input } from '@angular/core';

@Component({
  selector: 'Dashboard-SidebarMenu',
  templateUrl: './SidebarMenu.component.html',
  styleUrls: ['./SidebarMenu.component.scss']
})
export class Dashboard_SidebarMenu {

  @Input() Title : string = ""
  @Input() Icon : string = ""

  SidebarMenu_Toggle : boolean = false

  constructor(){

  }

  // ==========

  onSidebarMenu_Toggle(){
    this.SidebarMenu_Toggle = !this.SidebarMenu_Toggle
  }

}
