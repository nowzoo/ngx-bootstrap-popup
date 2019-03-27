import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxBootstrapPopupModule } from '@nowzoo/ngx-bootstrap-popup';
import { AppComponent } from './app.component';
import { DemoTooltipStringComponent } from './demo-tooltip-string/demo-tooltip-string.component';
import { DemoTooltipTemplateComponent } from './demo-tooltip-template/demo-tooltip-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTooltipStringComponent,
    DemoTooltipTemplateComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
