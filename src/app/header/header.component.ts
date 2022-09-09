import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private readonly router: Router) { }

  ngOnInit(): void {
  }

  goToReactive(): void {
    this.router.navigate(['reactive-contact'], { queryParams: {name: 'Angular~App'} })
  }

  goToTemplate(): void {
    this.router.navigate(['template-contact', '564']);
  }

}
