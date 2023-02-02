import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//dont forget




import { AppComponent } from './app.component';
import { SolutionComponent } from './solution/solution.component';
import { SelfComponent } from './self/self.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    SolutionComponent,
    SelfComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,//dont forget
    AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
