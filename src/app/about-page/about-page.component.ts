import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
  <p></p>
  <h1>Middle Page</h1>
  <h1>Hello from the middle page</h1>
  `,
  styles: []
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
