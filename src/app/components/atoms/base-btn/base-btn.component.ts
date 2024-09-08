// app-base-btn.component.ts
import { NgClass } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'app-base-btn',
  template: `
    <button [ngClass]="btnClass()" [disabled]="disabled()">{{ label() }}</button>
  `,
  styles: [`
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: var(--secondary-color);
    }

    .primary {
      background-color: var(--accent-color);
      color: white;
    }
    
    .secondary {
      background-color: var(--secondary-color);
      color: white;
    }

    .tertiary {
      background-color: var(--primary-color);
      color: white;
    }
  `]
})
export class BaseBtnComponent {

  public label = input<string>('');
  public btnClass = input<string>('');
  public disabled = input<boolean>(false);
}
