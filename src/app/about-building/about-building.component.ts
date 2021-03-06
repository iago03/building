import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Building } from '../shared-file/shared-class';

@Component({
  selector: 'app-about-building',
  templateUrl: './about-building.component.html',
  styleUrls: ['./about-building.component.css']
})
export class AboutBuildingComponent implements OnInit {
  buildingInfo:Building = new Building("","","","","","","","",false);

  constructor(private routing:ActivatedRoute) { }

  homePageBuildingItem:Building[] = [
    new Building("01",
    "Tbilisi",
    "01/ 23/ 2020",
    "Project 1",
    "Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. \n\nЗдесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры. Не забудьте про ключевые слова, по которым ваш сайт найдут в поисковых системах."
    ,"../assets/img/project1.1.jpg",
    "../assets/img/img2.jpg",
    "../assets/img/img2.jpg",
    true),
    new Building("02",
    "Kutaisi 2",
    "01/ 25/ 2020",
    "Project",
    "Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. \n\nЗдесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры. Не забудьте про ключевые слова, по которым ваш сайт найдут в поисковых системах.",
    "../assets/img/portfolio2.jpg",
    "../assets/img/img2.jpg",
    "../assets/img/img2.jpg",
    false),
    new Building("03",
    "Batumi 3",
    "05/ 05/ 2020",
    "Project",
    "Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. \n\nЗдесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры. Не забудьте про ключевые слова, по которым ваш сайт найдут в поисковых системах.",
    "../assets/img/portfolio3.jpg",
    "../assets/img/img2.jpg",
    "../assets/img/img2.jpg",
    false),
    new Building("04",
    "Bakuriani",
    "07/ 17/ 2020",
    "Project 4",
    "Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. \n\nЗдесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры. Не забудьте про ключевые слова, по которым ваш сайт найдут в поисковых системах.",
    "../assets/img/portfolio4.jpg",
    "../assets/img/img2.jpg",
    "../assets/img/img2.jpg",
    true),
    new Building("05",
    "Gudauri",
    "09/ 20/ 2020",
    "Project 5",
    "Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. \n\nЗдесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры. Не забудьте про ключевые слова, по которым ваш сайт найдут в поисковых системах.",
    "../assets/img/portfolio5.jpg",
    "../assets/img/img2.jpg",
    "../assets/img/img2.jpg",
    false),
    new Building("06",
    "Mestia",
    "12/ 01/ 2020",
    "Project 6",
    "Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. \n\nЗдесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты и цифры. Не забудьте про ключевые слова, по которым ваш сайт найдут в поисковых системах.",
    "../assets/img/portfolio6.jpg",
    "../assets/img/img2.jpg",
    "../assets/img/img2.jpg",
    true),
  ];

  ngOnInit(): void {
    this.getDataFromRouting();
  }

  getDataFromRouting(){
    this.routing.params.subscribe((par:Params)=>{
      var id = par['id'];
      var item:any = this.homePageBuildingItem.find(o => o.Id == id);
      this.buildingInfo = item;
    })
  }
}
