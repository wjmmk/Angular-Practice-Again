import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'porfolio-app';
  public listaVideos: Array<any> = [];

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
