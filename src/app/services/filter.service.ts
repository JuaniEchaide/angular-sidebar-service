import { Injectable, signal } from '@angular/core';

interface Filter {
  type: string;
  value: string;
}

interface FilterSearchState<T = any> {
  isOpen: boolean;
  flow: string;
  profile: string;
  filters: Filter[];
  results: T[];
}

@Injectable({
  providedIn: 'root'
})
export class FilterSearchStore<T = any> {
  public filterSearchState = signal<FilterSearchState<T>>({
    isOpen: false,
    flow: '',
    profile: '',
    filters: [],
    results: []
  });

  get state(): FilterSearchState<T> {
    return this.filterSearchState();
  }

  toggle(isOpen: boolean, flow?: string, profile?: string) {
    this.filterSearchState.update(value => ({ ...value, isOpen, flow: flow || value.flow, profile: profile || value.profile }));
  }

  update(newState: Partial<FilterSearchState<T>>) {
    this.filterSearchState.update(value => ({ ...value, ...newState }));
  }

  setFilters(filters: Filter[]) {
    this.filterSearchState.update(value => ({ ...value, filters }));
  }

  clearFilters() {
    this.filterSearchState.update(value => ({ ...value, filters: [] }));
  }

  setResults(results: T[]) {
    this.filterSearchState.update(value => ({ ...value, results }));
  }

  clearResults() {
    this.filterSearchState.update(value => ({ ...value, results: [] }));
  }
}

export function createFilterStore<T>(): FilterSearchStore<T> {
  return new FilterSearchStore<T>();
}

// Example usage
interface Machine {
  vin: string;
  client: string;
}

const machineFilterStore = createFilterStore<Machine>();
