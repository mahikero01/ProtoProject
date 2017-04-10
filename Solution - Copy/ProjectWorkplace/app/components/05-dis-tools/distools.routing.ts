import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { OptComponent } from './opt.component';
import { KhronosComponent } from './khronos.component';

const distoolsRoutes: Routes = [
    //paths
    { path : 'opt', component: OptComponent },
    { path : 'khronos', component: KhronosComponent },
];

 @NgModule ({
     imports: [ RouterModule.forChild(distoolsRoutes) ],
     exports: [ RouterModule ]
 })

export class DISToolsRouting {}