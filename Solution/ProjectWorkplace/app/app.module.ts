import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NonAuthComponent } from './non-auth';
import { AuthUserComponent } from './auth-user';
import { WelcomeComponent } from './welcome';
//ComponentModules
import { DISOverviewModule } from './components/01-disoverview/disoverview.module';
import { TeamModule } from './components/02-teamoverview/team.module';
import { LeadersModule } from './components/03-leaders/leaders.module';
import { DISToolsModule } from './components/04-distools/distools.module';
import { PolicyModule } from './components/05-policy/policy.module';
import { ExamModule } from './components/06-exam/exam.module';
//routing
import { AppRouting } from './app.routing';
//services
import { AuthService } from './services/auth.service';
@NgModule({
  imports:      [ BrowserModule , 
                  CommonModule,
                  LeadersModule,
                  DISOverviewModule,
                  TeamModule,
                  DISToolsModule,
                  PolicyModule,
                  ExamModule,
                  AppRouting 
                ],
  declarations: [ AppComponent,NonAuthComponent,AuthUserComponent,WelcomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
