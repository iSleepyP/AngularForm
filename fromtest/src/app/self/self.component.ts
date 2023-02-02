import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent {
  @ViewChild('d') testForm:NgForm;
   namee = 'name';
   emaill = 'name@...';
   password = '*****';
   defaultSelect = 'Advance';
   check = false;
   user={
    name:"",
    email:"",
    password:"",
    select:"",
    checkk:false
   }
   submitt=false;

    constructor(private router:Router,private route:ActivatedRoute){}

    onHomePage(){
      this.router.navigate(['']);
    }

    onSubmit(){
      console.log(this.testForm);
      this.submitt = true;

      this.user.name=this.testForm.value.userTest.namee
      this.user.email=this.testForm.value.userTest.emaill;
      this.user.password=this.testForm.value.userTest.password;
      this.user.select=this.testForm.value.secrett;
      this.user.checkk=this.testForm.value.check;

    }
}
