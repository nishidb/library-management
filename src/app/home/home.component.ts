import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor() { }

  ngOnInit(): void {
  }

  image1:String="assets/images/image1.jpg";
  image2:String="assets/images/image2.jpg";
  image3:String="assets/images/image3.jpg";
  

}
