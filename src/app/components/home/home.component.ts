import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  gitUsers: any[];
  name: string = '';
  api: string = 'https://api.github.com/search/users?q=';
  users: { id: number, name: string }[] = [
    { id: 0, name: "Abraham"},
    { id: 1, name: "Brandon"},
    { id: 2, name: "Catherine"},
    { id: 3, name: "Danny"},
    { id: 4, name: "Elaine"}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.api + 'tom').subscribe(data=> {
      this.gitUsers = data['items'];
    })
  }

  onSubmit(f: NgForm) {
    this.name = f.value.username;
    console.log(this.api + this.name);
    this.http.get(this.api + this.name).subscribe(data=> {
      console.log(data);
      this.gitUsers = data['items'];
    })
    console.log(f.value);
  }

}
