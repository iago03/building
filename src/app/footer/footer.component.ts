import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from '../shared-file/shared-class';

import '../../assets/smtp.js';
declare let Email:any;

const option = {
  PWD: 'B740EA4B6B724F836D54083F4C2B869D1E6B',
  USER: 'iagokharatishvili@gmail.com',
  HOST: 'smtp.elasticemail.com'
}


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  formItem:Form = new Form();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(ngForm:NgForm){
    Email.send({
      Host:option.HOST,
      Username:option.USER,
      Password:option.PWD,
      To:option.USER,
      From:option.USER,
      Subject:'contact',
      Body:`Name :${this.formItem.Name} <br/> Email : ${this.formItem.Email} <br/> Text :${this.formItem.Text}`
    })
    .then((msg:any)=>{
      alert(msg);
      ngForm.reset({})
    })
  }
}
