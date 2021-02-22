import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/shared-file/shared-class';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent implements OnInit {

  @Input() aboutCard:About = new About("","","","","");

  constructor() { }

  ngOnInit(): void {
  }

}
