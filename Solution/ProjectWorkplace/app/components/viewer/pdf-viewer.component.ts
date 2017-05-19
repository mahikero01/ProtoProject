import { Component,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//entities
@Component({
    //moduleId: module.id,
    selector: 'view-pdf',
    template: `

        
        <div width="100%" height="700px">
            <embed [src]="sanitizer.bypassSecurityTrustResourceUrl(srcString)" width="100%" height="700px" type="application/pdf"   > 
        </div>
    `,
    
        // <pdf-viewer [src]="srcString" 
        //             [page]="page" 
        //             [show-all]="true"
        //             [original-size]="false" 
        //             style="display: block;"
        // ></pdf-viewer>
    // templateUrl: 'sync-main.component.html',
    // resources/workplace/18 - Khronos.pdf" type="application/pdf
})
export class PDFComponent  { 
    constructor(public sanitizer: DomSanitizer){}
    @Input() srcString : string; //this handles the path of the image
    page: number = 1;
}
