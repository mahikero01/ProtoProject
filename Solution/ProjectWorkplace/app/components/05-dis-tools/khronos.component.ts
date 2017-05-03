import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    template:`
        <view-pdf [srcString] ="path">
        </view-pdf>
    `
})
export class KhronosComponent  { 
    path:string = 'resources/workplace/18 - Khronos.pdf';
}
