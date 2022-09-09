import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'porfolio-app';
  public listaVideos: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.listaVideos = [
      {
        title: 'Video 1',
        subtitle: 'subtitle video 1'
      },
      {
        title: 'Video 2',
        subtitle: 'subtitle video 2'
      },
      {
        title: 'Video 3',
        subtitle: 'subtitle video 3'
      }
    ]
  }

}
