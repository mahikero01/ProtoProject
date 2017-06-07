import { Component,OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
@Component({
    moduleId: module.id,
    templateUrl:`team-services.component.html`
})
export class TeamServicesComponent implements OnInit  { 
    slides: any[] = [];

    public constructor( private resourceService : ResourceService ) {}
    getSlides(){
        this.slides=[];
        this.resourceService.getResourcePath('Team Services')
            .then(res => {
                this.slides.push({
                    image: res.ResourcePath
                });
            })
            .catch(err=>{console.log(err)});
    }
    ngOnInit(){
        this.getSlides();
    }

    breadcrumbs =['Team Overview','Team Information' ,'Services'];
}