import { Component, OnInit, OnDestroy, inject, effect, signal, computed } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [ButtonModule, SidebarComponent],
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  sidebarVisible = signal<boolean>(false);
  public isOpen = computed(() => this.sidebarVisible.set(this.#sidebarService.state.isOpen));

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
