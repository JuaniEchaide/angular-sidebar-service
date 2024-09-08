import { Component, OnInit, OnDestroy, inject, effect, signal, computed } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../services/filter-service/sidebar.service';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [],
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  sidebarVisible = signal<boolean>(false);
  public isOpen = computed(() => this.sidebarVisible.set(this.#sidebarService.sidebarState().isOpen));

  #sidebarService: SidebarService = inject(SidebarService);

  constructor() {
    effect(() => {
      console.log('sidebarVisible', this.sidebarVisible())
    })
  }

  toggleSidebar() {
    this.#sidebarService.toggle(!this.sidebarVisible());
  }
}
