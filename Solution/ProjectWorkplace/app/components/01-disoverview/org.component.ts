import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:`org.component.html`
})
export class OrgComponent  { 
    path:string = 'resources/workplace/01DIS OVERVIEW/02-Organizational Chart.jpg';
    breadcrumbs =['DIS Overview' ,'Organizational Structure'];
}
