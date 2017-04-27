import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { TLComponent } from './tl.component';

const routes: Routes = [
    //paths
    { path : 'Team-Leader', component: TLComponent },
];

 @NgModule ({
     imports: [ RouterModule.forChild(routes) ],
     exports: [ RouterModule ]
 })

export class TLRouting {}