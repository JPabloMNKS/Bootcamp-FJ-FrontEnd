import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngAfterViewChecked';

  ngOnInit(): void {
    console.log('onInit called');
  }

  ngAfterViewChecked() {
    console.log('after view checked');
  }
  clickMe() {
    console.log('link clicked');
  }
}
