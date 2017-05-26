import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`sc.component.html`
})
export class SCComponent  { 
    slides: any[] = [];

    public constructor() {
        this.addSlide('04-Functional Tower.jpg');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/01DIS OVERVIEW/${ filename }`
        });
    }
    breadcrumbs =['DIS Overview' ,'Functional Tower'];
}
