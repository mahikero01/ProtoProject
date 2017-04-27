import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TLComponent } from './tl.component';
import { TLRouting } from './tl.routing';
import { ViewerModule } from '../viewer/viewer.module';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ViewerModule,
        TLRouting
    ],
    declarations: [
        TLComponent,
    ],
    providers: [
    ]
})

export class TLModule {}