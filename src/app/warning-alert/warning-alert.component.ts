import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p class="warning-text">Warning: {{message}}</p>`,
  styles: [`
    .warning-text {
      padding: 2rem;
      background-color: lightpink;
      border: 1px solid orangered;
      color: darkred;
    }
  `]
})
export class WarningAlertComponent {
  @Input() message = 'Warning!';
}
