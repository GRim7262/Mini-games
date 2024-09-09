import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'assignment1', component: Assignment1Component},
    { path: 'assignment2', component: Assignment2Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }