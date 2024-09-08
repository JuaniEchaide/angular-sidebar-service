import { Component, effect, inject, untracked } from '@angular/core';
import { BaseBtnComponent } from "../../components/atoms/base-btn/base-btn.component";
import { SidebarService } from '../../services/filter-service/sidebar.service';

@Component({
  selector: 'app-example-screen',
  standalone: true,
  imports: [BaseBtnComponent],
  template: `
    <div class="container">
      <app-base-btn [label]="'Hola'" btnClass="primary" [onClick]="toggleSidebar()"></app-base-btn>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 95vh;
    }
  `]
})
export class ExampleScreenComponent {
  #sidebarService = inject(SidebarService);
  constructor() {
    effect(() => {
      untracked(() => console.log('Sidebar open state:', this.#sidebarService.sidebarState().isOpen));
      const isOpen = this.#sidebarService.sidebarState().isOpen;
      console.log('Sidebar open state changed:', isOpen);
    });
  }

  toggleSidebar() {
    this.#sidebarService.toggle(!this.#sidebarService.sidebarState().isOpen);
  }
}
