import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VLComponent } from './vl.component';
import { BereavementComponent } from './bereavement.component';
import { WorkRuleComponent } from './workrule.component';
import { ViewerModule } from '../viewer/viewer.module';
import { PolicyRouting } from './policy.routing';
import { InformationComponent } from './information.component';
import { PrivacyComponent } from './privacy.component';
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
        BereavementComponent,
        InformationComponent,
        PrivacyComponent
    ],
    providers: [
    ]
})

export class PolicyModule {}
