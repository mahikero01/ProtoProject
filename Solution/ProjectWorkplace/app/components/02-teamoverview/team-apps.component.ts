import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`team-apps.component.html`
})
export class TeamAppsComponent  { 
    slides: any[] = [];

    public constructor() {
        this.addSlide('ESD_ToolsAndApps.pptx.png');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/02TEAM OVERVIEW/Gian Karlo Villaluz/${ filename }`
        });
    }
    breadcrumbs =['Team Overview','Team Information' ,'Tools and Applications'];
}