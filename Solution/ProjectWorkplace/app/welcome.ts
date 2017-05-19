import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Auth } from './entities/auth';
@Component({
  moduleId: module.id,
  selector: 'welcome-user',
  templateUrl: 'welcome.html'                                                                   
})
export class WelcomeComponent  { 
  @Input() user:Auth;
  @Output() cv:EventEmitter<string>=new EventEmitter();
  changeView(){
    this.cv.emit('');
  }
}
