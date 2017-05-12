import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`sc.component.html`
})
export class SCComponent  { 
    slides: any[] = [];

    public constructor() {
        this.addSlide('ServiceCatalogue_GlobalReportAndDigitalStrategy.png');
        this.addSlide('ServiceCatalogue_ISOps.png');
        this.addSlide('ServiceCatalogue_SocialMediaServices.png');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/06 - service catalogue/${ filename }`
        });
    }
    breadcrumbs =['DIS Overview' ,'Service Catalogue'];
}
