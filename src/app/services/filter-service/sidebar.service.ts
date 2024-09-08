import { Injectable, signal } from '@angular/core';

interface SidebarState {
  isOpen: boolean;
  flow: string;
  profile: string;
  filters: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public sidebarState = signal<SidebarState>({
    isOpen: false,
    flow: '',
    profile: '',
    filters: []
  });

  toggle(isOpen: boolean) {
    this.sidebarState.update(value => ({ ...value, isOpen }));
  }

  update(newState: SidebarState) {
    this.sidebarState.set(newState);
  }

  setFilters(filters: string[]) {
    this.sidebarState.update(value => ({ ...value, filters }));
  }

  clearFilters() {
    this.sidebarState.update(value => ({ ...value, filters: [] }));
  }
}
