import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleNgModuleComponent } from './lifecycle-ng-module/lifecycle-ng-module.component';
import { LifecyclePipeComponent } from './lifecycle-pipe/lifecycle-pipe.component';
import { LifecycleExplicitComponent } from './lifecycle-explicit/lifecycle-explicit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LifecycleComponent,
    LifecycleNgModuleComponent,
    LifecyclePipeComponent,
    LifecycleExplicitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
