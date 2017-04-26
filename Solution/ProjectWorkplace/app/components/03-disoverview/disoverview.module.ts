import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MVComponent } from './mv.component';
import { OrgComponent } from './org.component';
import { StrategiesComponent } from './strategies.component';


import { SCComponent } from './sc.component';
import { DISOverviewRouting } from './disoverview.routing';
import { ViewerModule } from '../viewer/viewer.module';
/* ngx-bootstrap */
import { CarouselModule } from 'ngx-bootstrap';
@NgModule({
    imports: [
        CarouselModule.forRoot(),
        CommonModule,
        FormsModule,
        ViewerModule,
        DISOverviewRouting
    ],
    declarations: [
        MVComponent,
        OrgComponent,
        StrategiesComponent,

        SCComponent,
    ],
    providers: [
    ]
})

export class DISOverviewModule {}