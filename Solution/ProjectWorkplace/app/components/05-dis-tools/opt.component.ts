import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    template: ` 
        <view-pdf [srcString]="path">
        </view-pdf>
    `
    //templateUrl:`opt.component.html`
})
export class OptComponent  { 
    path:string = 'resources/workplace/16 - OPT doc.pdf';
}
