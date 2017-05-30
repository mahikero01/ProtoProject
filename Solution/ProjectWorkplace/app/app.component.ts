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
    viewPage:number=0;
    constructor(
        public authService: AuthService,
    ){
        this.authService.getAuthorization()
            .then(auth => {
                this.auth =auth;
            });
    }
    changeView(){
        if(this.auth.isAuthenticated) this.viewPage=1;
        else this.viewPage=2;
    }
}
