import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MVComponent } from './mv.component';
import { OrgComponent } from './org.component';
import { StrategiesComponent } from './strategies.component';

import { DISOverviewRouting } from './disoverview.routing';
import { ViewerModule } from '../viewer/viewer.module';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ViewerModule,
        DISOverviewRouting
    ],
    declarations: [
        MVComponent,
        OrgComponent,
        StrategiesComponent
    ],
    providers: [
    ]
})

export class DISOverviewModule {}