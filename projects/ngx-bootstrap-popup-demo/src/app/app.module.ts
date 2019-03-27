import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxBootstrapPopupModule } from '@nowzoo/ngx-bootstrap-popup';
import { AppComponent } from './app.component';
import { DemoTooltipStringComponent } from './demo-tooltip-string/demo-tooltip-string.component';
import { DemoTooltipTemplateComponent } from './demo-tooltip-template/demo-tooltip-template.component';
import { DemoTooltipDynamicStringComponent } from './demo-tooltip-dynamic-string/demo-tooltip-dynamic-string.component';
import { DemoTooltipDataAttributesComponent } from './demo-tooltip-data-attributes/demo-tooltip-data-attributes.component';
import { DemoTooltipOptionsComponent } from './demo-tooltip-options/demo-tooltip-options.component';
import { DemoPopoverStringComponent } from './demo-popover-string/demo-popover-string.component';
import { DemoTooltipDismissComponent } from './demo-tooltip-dismiss/demo-tooltip-dismiss.component';
import { DemoPopoverDynamicStringComponent } from './demo-popover-dynamic-string/demo-popover-dynamic-string.component';
import { DemoPopoverTemplateComponent } from './demo-popover-template/demo-popover-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTooltipStringComponent,
    DemoTooltipTemplateComponent,
    DemoTooltipDynamicStringComponent,
    DemoTooltipDataAttributesComponent,
    DemoTooltipOptionsComponent,
    DemoPopoverStringComponent,
    DemoTooltipDismissComponent,
    DemoPopoverDynamicStringComponent,
    DemoPopoverTemplateComponent,
  ],
  imports: [
    BrowserModule,
    NgxBootstrapPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
