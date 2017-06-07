import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { VLComponent } from './vl.component';
import { WorkRuleComponent } from './workrule.component';
import { BereavementComponent } from './bereavement.component';
import { InformationComponent } from './information.component';
import { PrivacyComponent } from './privacy.component';
const routes: Routes = [
    //paths
    { path : 'vacation-leave', component: VLComponent },
    { path : 'work-rule', component: WorkRuleComponent },
    { path : 'bereavement-policy',component : BereavementComponent},
    { path : 'privacy-policy',component : PrivacyComponent},
    { path : 'information-security',component : InformationComponent},
];

 @NgModule ({
     imports: [ RouterModule.forChild(routes) ],
     exports: [ RouterModule ]
 })

export class PolicyRouting {}
