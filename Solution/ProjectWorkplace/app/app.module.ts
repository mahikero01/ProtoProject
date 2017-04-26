import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NonAuthComponent } from './non-auth';
import { AuthUserComponent } from './auth-user';
//ComponentModules
import { TLModule } from './components/02-tl/tl.module';
import { DISOverviewModule } from './components/03-disoverview/disoverview.module';
import { DISToolsModule } from './components/05-dis-tools/distools.module';
import { PolicyModule } from './components/06-policy/policy.module';
import { ExamModule } from './components/07-exam/exam.module';
//routing
import { AppRouting } from './app.routing';
//services
import { AuthService } from './services/auth.service';
@NgModule({
  imports:      [ BrowserModule , 
                  CommonModule,
                  TLModule,
                  DISOverviewModule,
                  DISToolsModule,
                  PolicyModule,
                  ExamModule,
                  AppRouting 
                ],
  declarations: [ AppComponent,NonAuthComponent,AuthUserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
