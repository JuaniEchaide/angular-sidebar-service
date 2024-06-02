import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { 

  }

  public state = signal<{
    isOpen: boolean,
    content: string[],
    flow: string
  }>({
    isOpen: false,
    content: [],
    flow: ''
  });

  public getState() {    
    return this.state();
  }

  public setOpen(open: boolean) { 
    this.state().isOpen = open;
  }
}
