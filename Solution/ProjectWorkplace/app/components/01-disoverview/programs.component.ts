import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';
@Component({
    moduleId: module.id,
    templateUrl:`strategies.component.html`
})
export class ProgramsComponent implements OnInit { 
    slides: any[] = [];
    routeName: '';
    public constructor(private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(){
        this.getRouteName();
        this.getImage();
    }
    getImage(){
        this.addSlide(this.routeName+'.jpg');
    }
    getRouteName(){
        this.route.params.subscribe(params => {
            this.routeName = params['id'];
            this.breadcrumbs.push(this.routeName);
        }); 
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/01DIS OVERVIEW/Programs/${ filename }`
        });
    }

    breadcrumbs =['DIS Overview','Programs'];
}
