import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})

export class AngularFormComponent {

  items = [];

  constructor(private http: HttpClient){}

  log(x) {
    console.log(x);
  }

  onSubmit() {
    this.getData();
    this.postData();
  }

  getData() {
    let url = 'http://intergalacticdb.me/api/characters';

    this.http.get(url).toPromise().then(data => {
      console.log(data);
      
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push("data[key]");
    });
  }

  postData() {
    let url = 'http://intergalacticdb.me/api/characters';
    let data = "{'name':'nombre'}";

    this.http.post(url, data).toPromise().then(data => {
      console.log(data);
      
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push("data[key]");
    });
  }

}
