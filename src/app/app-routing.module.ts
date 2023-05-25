import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false,useHash:true}),
    HomeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
