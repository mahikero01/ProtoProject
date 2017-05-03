import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OptComponent } from './opt.component';
import { KhronosComponent } from './khronos.component';

import { ViewerModule } from '../viewer/viewer.module';
import { DISToolsRouting } from './distools.routing';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ViewerModule,
        DISToolsRouting
    ],
    declarations: [
        OptComponent,
        KhronosComponent,
    ],
    providers: [
    ]
})

export class DISToolsModule {}