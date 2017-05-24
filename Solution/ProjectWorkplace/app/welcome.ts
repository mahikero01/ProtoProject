import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Auth } from './entities/auth';
@Component({
  moduleId: module.id,
  selector: 'welcome-user',
  templateUrl: 'welcome.html',
  styleUrls: ['welcome.css']                                                                   
})
export class WelcomeComponent  { 
  @Input() user:Auth;
  
  @Output() cv=new EventEmitter();
  
  photo:string='Resources/Images/background.png';
  changeView(){
    this.cv.emit();
  }
}
