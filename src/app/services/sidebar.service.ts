import { Injectable, EventEmitter } from '@angular/core';

interface SidebarState {
  isOpen: boolean;
  flow: any;
  profile: any;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarState: SidebarState = { isOpen: false, flow: null, profile: null };
  stateChanged: EventEmitter<SidebarState> = new EventEmitter();

  getState(): SidebarState {
    return this.sidebarState;
  }

  toggleSidebar(isOpen: boolean) {
    this.sidebarState.isOpen = isOpen;
    this.stateChanged.emit(this.sidebarState);
  }

  updateSidebarState(newState: Partial<SidebarState>) {
    this.sidebarState = { ...this.sidebarState, ...newState };
    this.stateChanged.emit(this.sidebarState);
  }
}
