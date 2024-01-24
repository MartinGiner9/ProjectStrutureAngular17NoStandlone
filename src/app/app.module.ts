import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './shared/components/demo/demo.component';
import { DemoDirective } from './shared/directives/demo.directive';
import { DemoPipe } from './shared/pipe/demo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoDirective,
    DemoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
