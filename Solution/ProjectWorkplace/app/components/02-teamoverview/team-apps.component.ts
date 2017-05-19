import { Component,OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
@Component({
    moduleId: module.id,
    templateUrl:`team-apps.component.html`
})
export class TeamAppsComponent implements OnInit { 
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

    // addSlide(filename:string): void {
    //     this.slides.push({
    //         image: `resources/workplace/02TEAM OVERVIEW/Gian Karlo Villaluz/${ filename }`
    //     });
    // }
    breadcrumbs =['Team Overview','Team Information' ,'Tools and Applications'];
}