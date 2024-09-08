import { Component, effect, inject } from '@angular/core';
import { BaseBtnComponent } from "../../components/atoms/base-btn/base-btn.component";
import { SidebarService } from '../../services/filter-service/sidebar.service';

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
  #sidebarService = inject(SidebarService);
  constructor() {
    effect(() => {
      const isOpen = this.#sidebarService.state.isOpen;
      console.log('Sidebar open state changed:', isOpen);
    });
  }

  toggleSidebar() {
    this.#sidebarService.toggle(!this.#sidebarService.state.isOpen);
  }
}
