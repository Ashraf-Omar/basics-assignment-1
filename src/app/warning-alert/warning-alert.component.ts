import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<h6 class="warning-text">Warning: {{message}}</h6>`,
  styles: [`
    .warning-text {
      color: darkorange;
    }
  `]
})
export class WarningAlertComponent {
  @Input() message = 'Warning!';
}
