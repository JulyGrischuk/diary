import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public characters = [
  {name: 'Lady January', avatar: "assets/images/card.jpeg"}, 
  {name: 'Lady February', avatar: "assets/images/card.jpeg"}, 
  {name: 'Lady March', avatar: "assets/images/card.jpeg"}, 
  {name: 'Lady April', avatar: "assets/images/card.jpeg"}, 
  {name: 'Lady May', avatar: "assets/images/card.jpeg"},
  {name: 'Lady June', avatar: "assets/images/card.jpeg"},
  {name: 'Lady July', avatar: "assets/images/card.jpeg"},
  {name: 'Lady August', avatar: "assets/images/card.jpeg"},
  {name: 'Lady September', avatar: "assets/images/card.jpeg"},
  {name: 'Lady October', avatar: "assets/images/unnamed.png"},
  {name: 'Lady November', avatar: "assets/images/card.jpeg"},
  {name: 'Lady December', avatar: "assets/images/card.jpeg"}, 
];

  constructor() { }

  ngOnInit(): void {
  }

}
