import { Component , Input } from '@angular/core';

@Component({
  selector: 'Dashboard-SidebarTitle',
  templateUrl: './SidebarTitle.component.html',
  styleUrls: ['./SidebarTitle.component.scss']
})
export class Dashboard_SidebarTitle {

  @Input() Title : string = ""

  constructor(){

  }

}
