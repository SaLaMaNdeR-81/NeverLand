import { Component , EventEmitter , Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'Auth-Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss' , '../Auth.Page.scss']
})
export class Auth_Login {

  @Output() AuthPageSelected = new EventEmitter<string>();
  Username : string = "" ;
  Password : string = "" ;
  
  // =======================================

  constructor(private http: HttpClient) {}

  // =======================================

  onSelect(feature : string){
    this.AuthPageSelected.emit(feature);
  }

  onFormSubmit(): void {
    const data = {
      username: this.Username,
      password: this.Password
    };

    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set Content-Type header to indicate JSON data
      },
      body: JSON.stringify(data) // Convert object to JSON string
    })
    .then(response => response.json())
    .then(parsedData => {

      console.log(parsedData);

      if (parsedData.token) {
        localStorage.setItem("Token" , parsedData.token)
        document.location.reload()
      }
      
    })
    .catch(error => console.error(error));
  }

}
