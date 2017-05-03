import { Component,Input } from '@angular/core';
//entities
@Component({
    //moduleId: module.id,
    selector: 'view-pdf',
    template: `
    <div class="text-center">
        <pdf-viewer [src]="srcString" 
                    [page]="page" 
                    [show-all]="true"
                    [original-size]="false" 
                    style="display: inherit;"
        ></pdf-viewer>
    </div>
    `,
    // templateUrl: 'sync-main.component.html',
    // resources/workplace/18 - Khronos.pdf" type="application/pdf
})
export class PDFComponent  { 
    @Input() srcString : string; //this handles the path of the image
    page: number = 1;
}
