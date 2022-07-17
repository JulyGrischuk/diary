import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public characters = [
  {name: 'Lady January'}, 
  {name: 'Lady February'}, 
  {name: 'Lady March'}, 
  {name: 'Lady April'}, 
  {name: 'Lady May'},
  {name: 'Lady June'},
  {name: 'Lady July'},
  {name: 'Lady August'},
  {name: 'Lady September'},
  {name: 'Lady October'},
  {name: 'Lady November'},
  {name: 'Lady December'}, 
];

  constructor() { }

  ngOnInit(): void {
  }

}
