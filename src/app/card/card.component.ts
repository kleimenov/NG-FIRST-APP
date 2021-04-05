import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  //create some variables
  title = 'My title';
  number = 777;
  obj = {
    name: 'ivan',
    info: {
      county: 'Canada',
      job: 'Developer',
    },
  };

  //create some methods
  getInfo() {
    return 'test object (func notation)';
  }

  getInfo2 = () => {
    return 'test object (arrow func notation)';
  };
}
