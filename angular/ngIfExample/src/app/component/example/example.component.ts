import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent   {
  constructor() {}

  isLoggedIn = false;

  isloged(){
    this.isLoggedIn = !this.isLoggedIn;
  }
}
