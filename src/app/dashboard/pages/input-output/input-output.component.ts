import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-input-output',
    imports: [],
    templateUrl: './input-output.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent { }
