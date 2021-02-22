import { Component, OnInit } from '@angular/core';
import { About } from '../shared-file/shared-class';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutCardItem:About[] = [
    new About("../assets/img/about1.webp","ПАРТНЕР","ИРИНА ЛЕСОВАЯ","Это текст. Кликните дважды, чтобы отредактировать и рассказать посетителям о себе.","info@mysite.ru"),
    new About("../assets/img/about2.webp","ПАРТНЕР","МИХАИЛ ТИТОВ","Это текст. Кликните дважды, чтобы отредактировать и рассказать посетителям о себе.","info@mysite.ru"),
    new About("../assets/img/about3.webp","ПАРТНЕР","АЛИЯ КАРИМОВА","Это текст. Кликните дважды, чтобы отредактировать и рассказать посетителям о себе.","info@mysite.ru"),
    new About("../assets/img/about4.webp","ПАРТНЕР","НИКИТА ЗИМИН","Это текст. Кликните дважды, чтобы отредактировать и рассказать посетителям о себе.","info@mysite.ru"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
