import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router,private route:ActivatedRoute){}
  
  onSelfPage(){
    this.router.navigate(['test'],{relativeTo:this.route})
  }

  onSolutionPage(){
    this.router.navigate(['Solution'],{relativeTo:this.route})
  }
}
