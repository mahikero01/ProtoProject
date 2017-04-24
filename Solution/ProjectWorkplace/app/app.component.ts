import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Auth } from './entities/auth';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    auth:Auth=new Auth(false,'','');
    
    constructor(
        public authService: AuthService
    ){ 
        this.authService.getAuthorization()
            .then(auth => this.auth =auth );
    }
    
    changeArrow(myElem:string):void{
        //console.log(document.getElementById(myElem).className);
        if(document.getElementById(myElem).className == "glyphicon glyphicon-triangle-bottom"){
            document.getElementById(myElem).className = "glyphicon glyphicon-triangle-top";
        }
        else document.getElementById(myElem).className = "glyphicon glyphicon-triangle-bottom";
    }
}
