import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, DoCheck {

  constructor() { }
  ngDoCheck(): void {
    console.log('Im the do check');
  }

  ngOnInit(): void {
    console.log('ngOnInit from the child')
  }

  ngOnChange(){

  }
  clickMe() {
    console.log('link clicked from the child');
  }

}
