import { Component, TemplateRef, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-bootstrap-popup-placeholder',
  template: `
    <div #insertedContent>
      <ng-container *ngTemplateOutlet="template"></ng-container>
    </div>
    <ng-template #defaultTemplate>{{inserted}}</ng-template>
  `,
  styles: [':host {display: none;}']
})
export class NgxBootstrapPopupPlaceholderComponent {
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  @ViewChild('insertedContent') insertedContent: ElementRef;


  private _inserted: string | TemplateRef<any>;
  private _template: TemplateRef<any>;


  get inserted(): string | TemplateRef<any> {
    return this._inserted;
  }

  set inserted(inserted: string | TemplateRef<any>) {
    this._inserted = inserted;
    if (inserted instanceof TemplateRef) {
      this._template = inserted;
    } else {
      this._template = this.defaultTemplate;
    }
  }

  get template(): TemplateRef<any> {
    return this._template;
  }

}
