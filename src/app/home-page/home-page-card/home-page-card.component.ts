import { Component, Input, OnInit } from '@angular/core';
import { Building } from 'src/app/shared-file/shared-class';

@Component({
  selector: 'app-home-page-card',
  templateUrl: './home-page-card.component.html',
  styleUrls: ['./home-page-card.component.css']
})
export class HomePageCardComponent implements OnInit {

  @Input() homePageBuilding:Building = new Building("","","","","","","","",false);

  constructor() { }

  ngOnInit(): void {
  }

}
