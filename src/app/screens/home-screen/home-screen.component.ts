import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent {
  #sidebarService = inject(SidebarService);
  public isOpen = this.#sidebarService.getState().isOpen;

  public openHandler() {
    this.#sidebarService.setOpen(!this.isOpen);
  }
}
