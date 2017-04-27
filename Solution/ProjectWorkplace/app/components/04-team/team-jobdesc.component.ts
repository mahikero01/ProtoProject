import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`team-jobdesc.component.html`
})
export class TeamJobDescComponent  { 
    slides: any[] = [];

    public constructor() {
        this.addSlide('ESD_JobDescription.pptx.png');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/04 - Team/Gian Karlo Villaluz/${ filename }`
        });
    }
}