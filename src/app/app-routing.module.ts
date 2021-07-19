import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddVideoComponent } from './video/add/add.component';

const routes: Routes = [
  { path: 'welcome', component: AppComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AddAccountComponent },
  { path: 'add-video', component: AddVideoComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [  
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
