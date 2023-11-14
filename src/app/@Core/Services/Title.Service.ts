import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private readonly ApplicationName = 'NeverLand';

  public ResetTitle() {
    document.title = `${this.ApplicationName}`
  }

  public SetTitle(Title:string) {
    document.title = `${this.ApplicationName} - ${Title}`
  }

  public SetSpecialTitle(Title:string) {
    document.title = `${Title}`
  }

}
