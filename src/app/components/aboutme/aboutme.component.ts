import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable, from } from 'rxjs';
import { ChildActivationStart } from '@angular/router';



@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],

})
export class AboutmeComponent implements OnInit {

  Form = new FormGroup({

    name: new FormControl(),
    emailForm: new FormControl(),
    mensg: new FormControl()
  });

  constructor() { }

  ngOnInit() {

  }

  //Email fica dando erro mas faz o get e envio do email
  public onSubmit() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "jennybekadutra@gmail.com",
      Password: "31d2b40c-aa26-4844-80ed-89bac6599f52",
      To: "jennybekadutra@gmail.com",
      From: "jennybekadutra@gmail.com",
      Subject: `Contato do site Jogos, feito por ${this.Form.controls.name.value},  ${this.Form.controls.emailForm.value}`,
      Body: `Assunto: ${this.Form.controls.mensg.value}`
    }).then(
      message => alert(message)
    );
    console.log(this.Form.controls.emailForm.value);
  }


}
