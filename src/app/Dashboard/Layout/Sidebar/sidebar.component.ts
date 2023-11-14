import { Component ,EventEmitter, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AlertMessageService } from 'src/app/@Core/Services/AlertMessage.Service';

@Component({
  selector: 'Dashboard-Sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})
export class Dashboard_Sidebar {

  @Output() DashboardPageSelected = new EventEmitter<string>();

  constructor(private AlertService : AlertMessageService ){

  }

  onSelect(feature : string){
    this.DashboardPageSelected.emit(feature);
  }

  onLogOut(){

    localStorage.removeItem("Token")
    document.location.reload()

  }

}
