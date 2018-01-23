import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  users: { id: number, name: string }[] = [
    { id: 0, name: "Abraham"},
    { id: 1, name: "Brandon"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
