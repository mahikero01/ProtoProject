import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    template:`
        <view-pdf [srcString]="path">
        </view-pdf>
    `
})
export class WorkRuleComponent  { 
    path:string = 'resources/workplace/19 - WORK RULES.FINAL.pdf';
}
