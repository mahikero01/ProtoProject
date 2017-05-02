import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './entities/auth';
@Component({
  moduleId: module.id,
  selector: 'auth-user',
  templateUrl: 'auth-user.html'
})
export class AuthUserComponent  { 
  @Input() user:Auth;
  constructor(
        private router: Router,
  ){ }

  routeWithUserName(path:string){
      this.router.navigate(['/'+path, this.user.userName]);
  }
  routeWOUserName(path:string){
      this.router.navigate(['/'+path]);
  }
//   changeArrow(myElem:string):void{
//       //console.log(document.getElementById(myElem).className);
//       if(document.getElementById(myElem).className == "glyphicon glyphicon-triangle-bottom"){
//           document.getElementById(myElem).className = "glyphicon glyphicon-triangle-top";
//       }
//       else document.getElementById(myElem).className = "glyphicon glyphicon-triangle-bottom";
//   }
}
