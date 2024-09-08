import { Component } from '@angular/core';
import { BaseBtnComponent } from "../../components/atoms/base-btn/base-btn.component";

@Component({
  selector: 'app-example-screen',
  standalone: true,
  imports: [BaseBtnComponent],
  template: `
    <div class="container">
      <app-base-btn label="Hola" btnClass="primary"></app-base-btn>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 95vh;
    }
    .analyze-btn:hover {
      background-color: var(--secondary-color);
    }
  `]
})
export class ExampleScreenComponent {

}
