import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-page',
  template: `
    <p></p>
    <h1>Left Page</h1>
    <h1>Hello from the left page</h1>
  `,
  styles: []
})
export class LeftPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
