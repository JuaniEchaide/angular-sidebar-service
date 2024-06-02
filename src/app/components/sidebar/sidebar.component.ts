import { Component, inject } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  #sidebarService = inject(SidebarService);
  public isOpen = this.#sidebarService.getState().isOpen;

  public openHandler() {
    this.#sidebarService.setOpen(!this.isOpen);
  }
}
