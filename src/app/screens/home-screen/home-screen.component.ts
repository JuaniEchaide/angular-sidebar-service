import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [ButtonModule, SidebarModule],
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit, OnDestroy {
  sidebarVisible: boolean = false;
  private sidebarSubscription!: Subscription;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarVisible = this.sidebarService.getState().isOpen;
    this.sidebarSubscription = this.sidebarService.stateChanged.subscribe(state => {
      this.sidebarVisible = state.isOpen;
    });
  }

  ngOnDestroy() {
    this.sidebarSubscription.unsubscribe();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar(!this.sidebarVisible);
  }
}
