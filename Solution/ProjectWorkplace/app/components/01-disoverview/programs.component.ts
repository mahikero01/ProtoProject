import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';
@Component({
    moduleId: module.id,
    templateUrl:`strategies.component.html`
})
export class ProgramsComponent implements OnInit { 
    slides: any[] = [];
    routeName: '';
    breadcrumbs:any[]=[];
    public constructor(private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(){
        console.log('ngoninit');
        this.getRouteName();
    }
    getImage(){
        console.log('getImage');
        this.slides=[];
        this.addSlide(this.routeName+'.jpg');
    }
    getRouteName(){
        console.log('getRouteName');
        this.route.params.subscribe(params => {
            this.routeName = params['id'];
            this.breadcrumbs=[];
            this.breadcrumbs =['DIS Overview','Programs'];
            this.breadcrumbs.push(this.routeName);
            this.getImage();
        }); 
    }

    addSlide(filename:string): void {
        this.slides.push({
            image: `resources/workplace/01DIS OVERVIEW/Programs/${ filename }`
        });
    }

}
