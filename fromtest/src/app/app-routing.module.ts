import { Component, NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

import { SelfComponent } from "./self/self.component";
import { SolutionComponent } from "./solution/solution.component";
import { HomeComponent } from "./home/home.component";

const appRoutes:Routes =[
    
    {path:'',component:HomeComponent},
    {path:'test',component:SelfComponent},
    {path:'Solution',component:SolutionComponent},
    
];


@NgModule({
    imports: [
        //RouterModule.forRoot(appRoutes,{useHash:true})
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}