import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.css'],
})
export class SecondaryNavComponent implements OnInit {
  @Input() PageHeading: string;

  constructor() {}

  ngOnInit(): void {}
}
