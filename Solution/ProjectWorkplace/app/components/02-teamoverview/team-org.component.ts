import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`team-org.component.html`
})
export class TeamOrgComponent  { 
    slides: any[] = [];
    path:string ='resources/workplace/02TEAM OVERVIEW/Team Org/sample.html'
    public constructor() {
        this.addSlide('ESD_OrgChart.pptx.png');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/02TEAM OVERVIEW/Gian Karlo Villaluz/${ filename }`
        });
    }
    breadcrumbs =['Team Overview','Team Organization Chart'];
}