import { Component,OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
@Component({
    moduleId: module.id,
    templateUrl:`team-services.component.html`
})
export class TeamServicesComponent implements OnInit  { 
    slides: any[] = [];

    public constructor( private resourceService : ResourceService ) {}

    ngOnInit(){
        this.resourceService.getResourcePath('Team Apps')
            .then(res => {
                this.slides.push({
                    image: res.ResourcePath
                });
            });
    }
    breadcrumbs =['Team Overview','Team Information' ,'Services'];
}