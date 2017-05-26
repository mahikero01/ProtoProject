import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { MVComponent } from './mv.component';
import { OrgComponent } from './org.component';

import { SCComponent } from './sc.component';
import { StrategiesComponent } from './strategies.component';
import { ProgramsComponent } from './programs.component';
const routes: Routes = [
    //paths
    { path : 'mission-vision', component: MVComponent },
    { path : 'organization', component: OrgComponent },
    { path : 'strategies', component: StrategiesComponent },
    { path : 'Functional-Tower', component: SCComponent },
    { path : 'Programs/:id', component: ProgramsComponent },

];

 @NgModule ({
     imports: [ RouterModule.forChild(routes) ],
     exports: [ RouterModule ]
 })

export class DISOverviewRouting {}