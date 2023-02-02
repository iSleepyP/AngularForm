import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent {
  constructor(private router:Router,private route:ActivatedRoute){}

    subscription = ['Basic','Advance','Pro'];
    selectedSubsription = 'Advance'

    onHomePage(){
      this.router.navigate(['']);
    }

    onForm(signupF){
      console.log(signupF.value);
    }


}
