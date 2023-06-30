import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  buttonId:any; 
  search:String="assets/images/search.png"; 
  fiction:String="assets/images/fiction.jpg"; 
  non:String="assets/images/non-fiction.jpg"; 
  technology:String="assets/images/technology.jpg"; 
  historic:String="assets/images/hist.jpg"; 
  bio:String="assets/images/bio.jpg"; 
  mech:String="assets/images/mech.png"; 
  philosophy:String="assets/images/philosophy.jpg"; 
  mys:String="assets/images/mys.jpg"; 
 
 
  openLink(buttonId: string) { 
    if (buttonId === "button1") { 
      window.open("https://www.goodreads.com/shelf/show/fiction", "_blank"); 
    } else if (buttonId === "button2") { 
      window.open("https://www.goodreads.com/shelf/show/non", "_blank"); 
    }else if (buttonId === "button3") { 
      window.open("https://www.goodreads.com/shelf/show/technology", "_blank"); 
    }else if (buttonId === "button4") { 
      window.open("https://www.goodreads.com/shelf/show/history", "_blank"); 
    }else if (buttonId === "button5") { 
      window.open("https://www.goodreads.com/shelf/show/biography", "_blank"); 
    }else if (buttonId === "button6") { 
      window.open("https://www.goodreads.com/shelf/show/quantum-mechanics", "_blank"); 
    }else if (buttonId === "button7") { 
      window.open("https://www.goodreads.com/shelf/show/philosophy", "_blank"); 
    }else if (buttonId === "button8") { 
      window.open("https://www.goodreads.com/shelf/show/mystery", "_blank"); 
    } 
  }

  ngOnInit(): void {
  }

}
