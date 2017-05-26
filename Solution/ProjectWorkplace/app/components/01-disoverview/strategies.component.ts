import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`strategies.component.html`
})
export class StrategiesComponent  { 
    slides: any[] = [];

    public constructor() {
        this.addSlide('03a - customer experience.png');
        this.addSlide('03b - process improvement.png');
        this.addSlide('03c - cost efficiencies.png');
        this.addSlide('03d - performance.png');
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/01DIS OVERVIEW/strategies/${ filename }`
        });
    }

    breadcrumbs =['DIS Overview' ,'Strategies'];
}
