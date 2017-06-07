import { Component,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//entities
@Component({
    //moduleId: module.id,
    selector: 'view-img',
    // template: `<img class="content-img" [src]="sanitizer.bypassSecurityTrustUrl(srcString)" />`,
    template: `<img class="content-img" [lazyLoad]="srcString" />`,
    // templateUrl: 'sync-main.component.html',
})
export class PhotoViewerComponent  { 
    constructor(public sanitizer: DomSanitizer){}
    @Input() srcString : string; //this handles the path of the image
}
