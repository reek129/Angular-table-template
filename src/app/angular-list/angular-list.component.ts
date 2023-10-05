import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.css']
})
export class AngularListComponent implements OnInit {

  items = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople() {

    let url = 'https://swapi.dev/api/people';

    this.http.get(url).toPromise().then(data => {
      for (let key in data['results']) this.items.push(data['results'][key]);
    });
  }

}