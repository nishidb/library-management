import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  @ViewChild('f')  
  form!: NgForm;  
  
  user = {  
    name: "",  
    rollno:"",  
    email:"",  
  
    username: '',  
    password: ''  
  }
  onSubmit(form:NgForm){
    
  }
  ngOnInit(): void {
  }

}
