import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { MyCommonModule } from '../common-components/mycommon.module';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { PDFComponent } from './pdf-viewer.component';
import { PhotoViewerComponent } from './photo-viewer.component';
import { VideoViewerComponent } from './video-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        
    ],
    declarations: [
        PdfViewerComponent,
        PDFComponent,
        PhotoViewerComponent,
        VideoViewerComponent,
    ],
    providers: [
    ],
    exports: [
        PDFComponent,
        PdfViewerComponent,
        PhotoViewerComponent,
        VideoViewerComponent,
    ] 
})

export class ViewerModule {}