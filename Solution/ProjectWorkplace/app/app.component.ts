import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>
  //     <ul class="nav nav-tabs">
  //           <li role="presentation"><a routerLink="/viewphoto">photo-sample</a></li>
  //           <li role="presentation"><a routerLink="/viewvideo">Follow up Items</a></li>
            
            
  //       </ul>
  // <router-outlet></router-outlet>`,
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
  name = 'Angular'; 
    changeArrow(myElem:string):void{
        console.log(document.getElementById(myElem).className);
        if(document.getElementById(myElem).className == "glyphicon glyphicon-triangle-bottom"){
            document.getElementById(myElem).className = "glyphicon glyphicon-triangle-top";
        }
        else document.getElementById(myElem).className = "glyphicon glyphicon-triangle-bottom";
    }

}
