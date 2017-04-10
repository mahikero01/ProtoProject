import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { VLComponent } from './vl.component';
import { WorkRuleComponent } from './workrule.component';

const distoolsRoutes: Routes = [
    //paths
    { path : 'vacation-leave', component: VLComponent },
    { path : 'work-rule', component: WorkRuleComponent },
];

 @NgModule ({
     imports: [ RouterModule.forChild(distoolsRoutes) ],
     exports: [ RouterModule ]
 })

export class PolicyRouting {}