import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeamOrgComponent } from './team-org.component';
import { TeamAppsComponent } from './team-apps.component';
import { TeamServicesComponent } from './team-services.component';
import { TeamJobDescComponent } from './team-jobdesc.component';

import { TeamRouting } from './team.routing';
import { ViewerModule } from '../viewer/viewer.module';
/* ngx-bootstrap */
import { CarouselModule } from 'ngx-bootstrap';
/*services */
import { ResourceService } from '../../services/resource.service';
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
@NgModule({
    imports: [
        CarouselModule.forRoot(),
        CommonModule,
        FormsModule,
        ViewerModule,
        TeamRouting
    ],
    declarations: [
        TeamOrgComponent,
        TeamAppsComponent,
        TeamServicesComponent,
        TeamJobDescComponent
    ],
    providers: [
        ResourceService
    ]
})

export class TeamModule {}