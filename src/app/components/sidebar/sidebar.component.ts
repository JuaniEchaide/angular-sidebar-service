import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  private sidebarSubscription!: Subscription;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.isOpen = this.sidebarService.getState().isOpen;
    this.sidebarSubscription = this.sidebarService.stateChanged.subscribe(state => {
      this.isOpen = state.isOpen;
    });
  }

  ngOnDestroy() {
    this.sidebarSubscription.unsubscribe();
  }

  onVisibleChange(event: boolean) {
    this.isOpen = event;
    this.sidebarService.toggleSidebar(event);
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar(!this.isOpen);
  }
}
