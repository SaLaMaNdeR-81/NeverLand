import { Component ,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'DashboardPage-Profile',
  templateUrl: './Profile.Page.html',
  styleUrls: ['./Profile.Page.scss']
})
export class DashboardPage_Profile {

  constructor(private http: HttpClient){

  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('/api/upload', formData);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadFile(file);
  }

}
