import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VLComponent } from './vl.component';
import { WorkRuleComponent } from './workrule.component';
import { ViewerModule } from '../viewer/viewer.module';
import { PolicyRouting } from './policy.routing';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ViewerModule,
        PolicyRouting
    ],
    declarations: [
        VLComponent,
        WorkRuleComponent,
    ],
    providers: [
    ]
})

export class PolicyModule {}