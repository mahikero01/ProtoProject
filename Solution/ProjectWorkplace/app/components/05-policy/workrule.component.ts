import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl:'workrule.component.html'
})
export class WorkRuleComponent  { 
    path:string = 'resources/workplace/05POLICIES/WORK RULES.pdf';
    breadcrumbs =['Policies' ,'House Rules'];
}
