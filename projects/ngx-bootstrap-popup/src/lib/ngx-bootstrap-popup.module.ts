import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapPopupPlaceholderComponent } from './ngx-bootstrap-popup-placeholder.component';
import { NgxBootstrapTooltipDirective } from './ngx-bootstrap-tooltip.directive';
import { NgxBootstrapPopoverDirective } from './ngx-bootstrap-popover.directive';

@NgModule({
  declarations: [
    NgxBootstrapPopupPlaceholderComponent,
    NgxBootstrapTooltipDirective,
    NgxBootstrapPopoverDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxBootstrapTooltipDirective,
    NgxBootstrapPopoverDirective
  ],
  entryComponents: [
    NgxBootstrapPopupPlaceholderComponent
  ]
})
export class NgxBootstrapPopupModule { }
