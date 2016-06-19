import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rio-button',
  template: `
    <button
      (click)="handleClick($event)"
      type="{{type || 'button'}}"
      class="btn btn-primary {{className}}">

      <ng-content></ng-content>
    </button>
  `
})
export class RioButtonComponent {
  @Input() className: string;
  @Input() type: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  handleClick(event) {
    this.onClick.emit({});
  }
};
