import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:'bereavement.component.html'
})
export class BereavementComponent  { 
    path:string = 'resources/workplace/05POLICIES/Bereavement Policy.pdf';
    breadcrumbs =['Policies' ,'Bereavement Policy'];
}
