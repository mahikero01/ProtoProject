import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentReaderService } from '../../services/contentreader.service';
@Component({
    moduleId: module.id,
    templateUrl:`team-org.component.html`
})
export class TeamOrgComponent  { 
    slides: any[] = [];
    content:any;
    path:string ='resources/workplace/02TEAM OVERVIEW/Team Org/sample.html'
    public constructor
    (private cr : ContentReaderService
    ,public sanitizer: DomSanitizer) {
        //this.addSlide('ESD_OrgChart.pptx.png');
        //cr.getContent('Team Org').then(content => this.content=content);
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/02TEAM OVERVIEW/Gian Karlo Villaluz/${ filename }`
        });
    }
    breadcrumbs =['Team Overview','Team Organization Chart'];
}