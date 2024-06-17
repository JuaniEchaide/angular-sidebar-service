import { Component, OnInit, OnDestroy, inject, effect, computed } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarService } from '../../services/sidebar.service';
import { ClientSearchComponent } from '../client-search/client-search.component';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ClientSearchComponent, DropdownModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpen = computed(() => this.#sidebarService.state.isOpen);
  #sidebarService = inject(SidebarService);


  constructor() {
    effect(() => {
      console.log('isOpen', this.isOpen())
    })
  }
  onVisibleChange(event: boolean) {
    this.#sidebarService.toggle(event);
  }

  toggleSidebar() {
    this.#sidebarService.toggle(!this.isOpen);
  }
}
