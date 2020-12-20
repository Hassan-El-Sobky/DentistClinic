import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Covid19Component } from './covid19/covid19.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'home',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'covid19',component:Covid19Component},
 {path:'contact',component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
