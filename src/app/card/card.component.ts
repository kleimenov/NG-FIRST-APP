import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  //create some variables
  title:string = 'My title';
  number = 777;
  obj:object = {
    name: 'ivan',
    info: {
      county: 'Canada',
      job: 'Developer',
    },
  };

  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png'

  disabled:boolean = false

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://angular.io/generated/images/marketing/concept-icons/material.png'
      this.disabled = true
    }, 3000)
  }

  

  //create some methods
  getInfo() {
    return 'test object (func notation)';
  }

  getInfo2 = () => {
    return 'test object (arrow func notation)';
  };
}
