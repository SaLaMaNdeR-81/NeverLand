import { Component , Input } from '@angular/core';

@Component({
  selector: 'Dashboard-Content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class Dashboard_Content {

  @Input() Sidebar_Stat : boolean = true ;
  @Input() SelectedPage : string = "";
  // @Input() bankName!: string;

}
