import { Component , Input } from '@angular/core';

@Component({
  selector: 'Dashboard-SidebarItem',
  templateUrl: './SidebarItem.component.html',
  styleUrls: ['./SidebarItem.component.scss']
})
export class Dashboard_SidebarItem {

  @Input() Title : string = ""
  @Input() Icon : string = ""

  constructor(){

  }

}
