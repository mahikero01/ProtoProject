import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    template:`
        <view-pdf [srcString]="path">
        </view-pdf>
    `
})
export class VLComponent  { 
    path:string = 'resources/workplace/20 - Vacation Leave.pdf';
}
