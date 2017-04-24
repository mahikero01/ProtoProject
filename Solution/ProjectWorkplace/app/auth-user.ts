import { Component,Input } from '@angular/core';
import { Auth } from './entities/auth';
@Component({
  moduleId: module.id,
  selector: 'auth-user',
  templateUrl: 'auth-user.html'
})
export class AuthUserComponent  { 
  @Input() user:Auth;
}
