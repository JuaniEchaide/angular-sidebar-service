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

  get state(): SidebarState {
    return this.sidebarState();
  }

  toggle(isOpen: boolean, _flow?:string,  _profile?:string) {
    this.sidebarState.update(value => ({ ...value, isOpen}));
  }

  update(newState: SidebarState) {
    this.sidebarState.update(value => ({ ...value, ...newState }));
  }

  setFilters(filters: []) {
    this.sidebarState.update(value => ({ ...value, filters }));
  }

  clearFilters() {
    this.sidebarState.update(value => ({ ...value, filters: [] }));
  }

}
