import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss']
})
export class ShortCardComponent implements OnInit {

  @Input()
  character!: {name: string, avatar: string};

  constructor() { }

  ngOnInit(): void {
  }

}
