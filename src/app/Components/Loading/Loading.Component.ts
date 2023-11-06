import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/@Core/Services/Loading.Service';

@Component({
  selector: 'App-Loading',
  templateUrl: './Loading.Component.html',
  styleUrls: ['./Loading.Component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.getLoaderState().subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
