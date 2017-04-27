import { Component,Input } from '@angular/core';
//entities
@Component({
    //moduleId: module.id,
    selector: 'view-vid',
    template: `
    <video controls width="100%" height="99%">
        <source [src]="srcString" type="video/mp4">
        <source [src]="srcString" type="video/wmv">
        Your browser does not support the video tag.
    </video>
        `,
    // templateUrl: 'sync-main.component.html',
})
export class VideoViewerComponent  { 
    @Input() srcString : string; //this handles the path of the image
}
