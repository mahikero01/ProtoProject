import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`org.component.html`
})
export class OrgComponent  { 
    path:string = 'resources/workplace/01DIS OVERVIEW/02-Organizational Chart.jpg';
    breadcrumbs =['DIS Overview' ,'Organizational Structure'];slides: any[] = [];

    public constructor() {
        this.addSlide('02-Organizational Chart.jpg');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/01DIS OVERVIEW/${ filename }`
        });
    }
}
