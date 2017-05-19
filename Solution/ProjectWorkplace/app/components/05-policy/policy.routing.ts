import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { VLComponent } from './vl.component';
import { WorkRuleComponent } from './workrule.component';
import { BereavementComponent } from './bereavement.component';
const routes: Routes = [
    //paths
    { path : 'vacation-leave', component: VLComponent },
    { path : 'work-rule', component: WorkRuleComponent },
    { path : 'bereavement-policy',component : BereavementComponent}
];

 @NgModule ({
     imports: [ RouterModule.forChild(routes) ],
     exports: [ RouterModule ]
 })

export class PolicyRouting {}