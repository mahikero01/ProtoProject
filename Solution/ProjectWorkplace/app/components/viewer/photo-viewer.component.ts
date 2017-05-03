import { Component,Input } from '@angular/core';
//entities
@Component({
    //moduleId: module.id,
    selector: 'view-img',
    template: `<img class="content-img" [src]="srcString" />`,
    // templateUrl: 'sync-main.component.html',
})
export class PhotoViewerComponent  { 
    @Input() srcString : string; //this handles the path of the image
}
