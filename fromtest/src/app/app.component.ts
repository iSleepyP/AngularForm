import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male','female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

  constructor(private router:Router,private route:ActivatedRoute){}
  
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*his.signupForm.setValue({
      userData:{
        username: suggestedName,
        email:''
      },
      secret:'pet',
      questionAnswer:'',
      gender:'male'
    });*/        // ทับค่าทั้งหมด

    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }});       //updateค่าที่กำหนดใช้ได้เฉพาะใน form
  }

  /*onSubmit(form:NgForm){
    console.log(form);
  }*/

  onSubmit(){
    //console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset(); //reset input box after submit
  }

  onSelfPage(){
    this.router.navigate(['test'],{relativeTo:this.route})
  }

  
}
