# NgxBootstrapPopup

# @nowzoo/ngx-bootstrap-popup

A minimal library for implementing Bootstrap 4 popovers and tooltips in Angular. The library depends on the native Bootstrap and jQuery code.

[Demo App](https://nowzoo.github.io/ngx-bootstrap-popup/) |
[Demo App Code](https://github.com/nowzoo/ngx-bootstrap-popup/tree/master/projects/ngx-bootstrap-popup-demo)


## Quick Start

Install the library and its dependencies...

```bash
npm i -S @nowzoo/ngx-bootstrap-popup jquery popper.js bootstrap
```

Include the dependencies in some way in your build, for example via `angular.json`...

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "projects/ngx-bootstrap-modal-demo/src/styles.scss"
],
"scripts": [
  "node_modules/jquery/dist/jquery.slim.min.js",
  "node_modules/popper.js/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
],
```

Import the module...
```ts
//...
import { NgxBootstrapPopupModule } from '@nowzoo/ngx-bootstrap-popup';

@NgModule({
  imports: [
    NgxBootstrapPopupModule
    //...
  ]
  //...
})
export class MyModule { }
```

Create a tooltip from a string...

```html
<button type="button" class="btn btn-primary" ngxBootstrapTooltip tooltipTitle="Hello World">
  Tooltip With String
</button>
```

...or a template...

```html
<button type="button"
class="btn btn-primary"
ngxBootstrapTooltip
[tooltipTitle]="titleTemplate">
  Tooltip from Template
</button>

<ng-template #titleTemplate>
  <i class="fas fa-rocket"></i>
  Hello {{name}}.
</ng-template>
```

Create a popover...

```html
<button type="button"
  class="btn btn-primary"
  ngxBootstrapPopover
  [popoverTitle]="titleTemplate"
  [popoverContent]="contentTemplate">
  Popover
</button>
<ng-template #titleTemplate>
  <i class="fas fa-clock fa-spin"></i> It is {{time}}.
</ng-template>

<ng-template #contentTemplate>
  <div style="font-size: 40px">
    <i class="fas fa-clock fa-spin"></i>
    {{time}}
  </div>
</ng-template>

```

## API

### Interface `IPopupOptions`

```ts
interface IPopupOptions {
  animation?: boolean;
  html?: boolean;
  delay?: number | {
    show: number;
    hide: number;
  };
  container?: string | HTMLElement | false;
  placement?: string | ((popupEl: HTMLElement, triggerEl: HTMLElement) => string);
  template?: string;
  offset?: number | string;
  fallbackPlacement?: string | string[];
  boundary?: string | HTMLElement;
  trigger?: string;
}

```

### Directive `NgxBootstrapTooltipDirective`

```ts
@Directive({
  selector: '[ngxBootstrapTooltip]'
})
class NgxBootstrapTooltipDirective {
  @Input() tooltipTitle: string | TemplateRef<any>;
  @Input() tooltipEnabled = true;
  @Input() tooltipDismissOnClickOutside = true;
  @Input() tooltipOptions: IPopupOptions;
  @Output() tooltipEvents: EventEmitter<Event>;
}
```

### Directive `NgxBootstrapPopoverDirective`

```ts
@Directive({
  selector: '[ngxBootstrapPopover]'
})
class NgxBootstrapPopoverDirective  {
  @Input() popoverTitle: string | TemplateRef<any>;
  @Input() popoverContent: string | TemplateRef<any>;
  @Input() popoverEnabled = true;
  @Input() popoverDismissOnClickOutside = true;
  @Input() popoverOptions: IPopupOptions;
  @Output() popoverEvents: EventEmitter<Event>;
}
```

## Development

Contributions are welcome. This library was generated with [Angular CLI](https://github.com/angular/angular-cli).

```bash
git clone https://github.com/nowzoo/ngx-bootstrap-popup.git
npm i
```

The library code is located in `projects/ngx-bootstrap-popup`.

To run tests:
  - `ng test ngx-bootstrap-popup`
  - or use the `wallaby.js` file at `projects/ngx-bootstrap-popup/wallaby.js`

Build the library with `ng build ngx-bootstrap-popup`.

The demo project is located at `projects/ngx-bootstrap-popup-demo`.

Serve the demo:

```bash
ng serve ngx-bootstrap-popup-demo --open
```

Note that you have to build the library for any changes to show up in the demo app. This does not happen automatically.  


## License

[MIT](https://github.com/nowzoo/ngx-bootstrap-popup/blob/master/LICENSE)
