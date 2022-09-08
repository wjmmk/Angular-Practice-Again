import { Component, OnInit } from '@angular/core';

interface ContactForm  {
  name: string,
  checkAdult: boolean,
  department: string,
  comment: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = {
        name: "",
        checkAdult: false,
        department: "",
        comment: ""
      }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(values: any): void {
    console.log("Form Values :", values)
  }

}
