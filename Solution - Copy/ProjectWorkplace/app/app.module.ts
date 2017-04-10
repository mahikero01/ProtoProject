import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//ComponentModules
import { DISOverviewModule } from './components/03-disoverview/disoverview.module';
import { DISToolsModule } from './components/05-dis-tools/distools.module';
import { PolicyModule } from './components/06-policy/policy.module';
//routing
import { AppRouting } from './app.routing';
@NgModule({
  imports:      [ BrowserModule , 
                  //SynchronizationModule, 
                  DISOverviewModule,
                  DISToolsModule,
                  PolicyModule,
                  AppRouting 
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
