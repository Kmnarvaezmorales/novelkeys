import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
  @Input() img: string;
  @Input() title: string;
  @Input() description: string;
  @Input() badge: string;

  constructor(){
    this.img = "";
    this.title = "";
    this.description = "";
    this.badge = "";
  }
}
