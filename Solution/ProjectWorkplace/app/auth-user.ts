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
  gotoDetail(){
      this.router.navigate(['/Quiz', this.user.userName]);
  }
}
