import { Component, Input, OnInit } from '@angular/core';
import { Building } from 'src/app/shared-file/shared-class';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {

  @Input() portfolioCard:Building = new Building("","","","","","","","",false);

  constructor() { }

  ngOnInit(): void {
  }

}
