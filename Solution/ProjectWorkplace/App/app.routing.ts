import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
    exports: [ RouterModule ]
})

export class AppRouting {}