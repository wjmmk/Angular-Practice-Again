import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public listaVideos: Array<any> = [];

  constructor(
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.favoriteService.favoriteTrigger.subscribe( data => {
      console.log('Data recibida: ', data)
      this.listaVideos.push(data)
    })
  }

}
