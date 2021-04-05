import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
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

  //create some methods
  getInfo() {
    return 'test object (func notation)';
  }

  getInfo2 = () => {
    return 'test object (arrow func notation)';
  };
}
