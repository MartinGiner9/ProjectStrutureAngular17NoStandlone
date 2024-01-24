import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftManagementRoutingComponent } from './dmo-routing.module';

import { DemoPageComponent } from './pages/demoPage/demoPage.component';

@NgModule({
  declarations: [ DemoPageComponent],
  imports: [
    CommonModule,
    ShiftManagementRoutingComponent,

  ],
})
export class DemoModule {}
