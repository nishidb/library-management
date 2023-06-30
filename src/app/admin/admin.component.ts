import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor() { }
  myimage: String="assets/images/Book1.jpg";
  ngOnInit(): void {
  }

}
