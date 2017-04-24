import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { ExamComponent } from './exam.component';

const routes: Routes = [
    //paths
    { path : 'Quiz/:id', component: ExamComponent },
    // { path : 'khronos', component: KhronosComponent },
];

 @NgModule ({
     imports: [ RouterModule.forChild(routes) ],
     exports: [ RouterModule ]
 })

export class ExamRouting {}