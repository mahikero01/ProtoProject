import { Component,OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    moduleId: module.id,
    templateUrl:`team-org.component.html`
})
export class TeamOrgComponent implements OnInit { 
    slides: any[] = [];
    content:any;
    path:string =''
    public constructor
    (private resourceService : ResourceService
    ,public sanitizer: DomSanitizer) {
    }

    ngOnInit(){
        this.resourceService.getResourcePath('Team Org')
            .then(res => {
                this.path=res.ResourcePath
            });
    }

    // addSlide(filename:string): void {
    //     this.slides.push({
    //         image: `resources/workplace/02TEAM OVERVIEW/Gian Karlo Villaluz/${ filename }`
    //     });
    // }
    breadcrumbs =['Team Overview','Team Organization Chart'];
}