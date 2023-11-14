import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  // private AlertMessagesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // public AlertMessages: Observable<any[]> = this.AlertMessagesSubject.asObservable();
  
  private AlertMessagesSubject = new BehaviorSubject< any[] > ([]);
  public AlertMessages = this.AlertMessagesSubject.asObservable();
  
  constructor() {

  }

  
  public AddAlert(alert: any) {
    const CurrentAlerts = this.AlertMessagesSubject.getValue();
    const updatedAlerts = [...CurrentAlerts, alert];
    this.AlertMessagesSubject.next(updatedAlerts);
    if (CurrentAlerts.length > 4) {
      CurrentAlerts.shift();
      this.AlertMessagesSubject.next(CurrentAlerts);
    }
  }

  public removeLastAlert() {
    const CurrentAlerts = this.AlertMessagesSubject.getValue();

    if (CurrentAlerts.length > 0) {
      CurrentAlerts.shift();
      this.AlertMessagesSubject.next(CurrentAlerts);
    }

  }

}
