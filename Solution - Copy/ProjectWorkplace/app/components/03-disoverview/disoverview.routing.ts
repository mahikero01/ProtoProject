import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { MVComponent } from './mv.component';
import { OrgComponent } from './org.component';
import { StrategiesComponent } from './strategies.component';

const photosampleRoutes: Routes = [
    //paths
    { path : 'mission-vision', component: MVComponent },
    { path : 'organization', component: OrgComponent },
    { path : 'strategies', component: StrategiesComponent },
];

 @NgModule ({
     imports: [ RouterModule.forChild(photosampleRoutes) ],
     exports: [ RouterModule ]
 })

export class DISOverviewRouting {}