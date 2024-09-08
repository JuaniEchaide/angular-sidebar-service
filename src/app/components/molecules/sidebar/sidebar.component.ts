import { Component, OnInit, OnDestroy, inject, effect, computed } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarService } from '../../../services/filter-service/sidebar.service';
import { ClientSearchComponent } from '../client-search/client-search.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ClientSearchComponent, DropdownModule],
  template: `
    <p-sidebar [visible]="isOpen()" (visibleChange)="onVisibleChange($event)" position="right">
      <h3>Filtros de búsqueda</h3>
      <button pButton type="button" label="X" (click)="toggleSidebar()"></button>
      <app-client-search />
    </p-sidebar>
|`,
  styles: [``]
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
    this.#sidebarService.toggle(!this.isOpen());
  }
  
}
