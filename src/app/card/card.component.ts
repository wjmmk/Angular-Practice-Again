import { Component, OnInit, Input } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() introDate: any;
  public image!:string;

  constructor(
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.image = 'https://source.unsplash.com/random'
  }

  addFavorite(dataIn: any): void {
    //console.log(dataIn);
    this.favoriteService.favoriteTrigger.emit({ data:this.introDate })
  }

}
