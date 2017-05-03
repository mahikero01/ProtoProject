import { Component,Input } from '@angular/core';
//entities
@Component({
    //moduleId: module.id,
    selector: 'view-pdf',
    template: `

        <pdf-viewer [src]="srcString" 
                    [page]="page" 
                    [show-all]="true"
                    [original-size]="false" 
                    style="display: block;"
        ></pdf-viewer>
    `,
    // templateUrl: 'sync-main.component.html',
    // resources/workplace/18 - Khronos.pdf" type="application/pdf
})
export class PDFComponent  { 
    @Input() srcString : string; //this handles the path of the image
    page: number = 1;
}
