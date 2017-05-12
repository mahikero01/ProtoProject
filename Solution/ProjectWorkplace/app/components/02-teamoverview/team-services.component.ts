import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`team-services.component.html`
})
export class TeamServicesComponent  { 
    slides: any[] = [];

    public constructor() {
        this.addSlide('ESD_Services.pptx.png');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/04 - Team/Gian Karlo Villaluz/${ filename }`
        });
    }
    breadcrumbs =['Team Overview','Team Information' ,'Services'];
}