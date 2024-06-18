import { Inject, Injectable, signal } from '@angular/core';
import { Paginated, FilterSearchState, Filter } from '../models/domain';


@Injectable({
  providedIn: 'root'
})
export class FilterSearchStore<T = any, Q extends Paginated = Paginated> {
  public queryParamState = signal<Q>(this.defaultQueryParams<Q>());
  public filterSearchState = signal<FilterSearchState<T>>({
    isOpen: false,
    flow: '',
    profile: '',
    filters: [],
    results: []
  });

  constructor(@Inject('mapper') private mapper: (filters: Filter[]) => Q) {}

  get state(): FilterSearchState<T> {
    return this.filterSearchState();
  }

  get params(): Q {
    return this.queryParamState()
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

  mapFiltersToQueryParam(): Q {
    return this.mapper(this.state.filters);
  }

  defaultQueryParams<Q extends Paginated>(additionalParams?: Partial<Q>): Q {
    return {
      page: 1,
      per_page: 10,
      total: 0,
      ...additionalParams
    } as Q;
  }
}

export function useFilterStore<T, Q extends Paginated = Paginated>(mapper: (filters: Filter[]) => Q): FilterSearchStore<T, Q> {
  const state = new FilterSearchStore<T, Q>(mapper);

  return new FilterSearchStore<T, Q>(mapper);
}

interface Machine {
  vin: string;
  client: string;
}

interface MachineParams extends Paginated {
  type?: string;
  value?: string;
}

const mapper = (filters: Filter[]): MachineParams => {
  return filters.reduce<MachineParams>((acc, filter) => {
    acc[filter.type] = filter.value;
    return acc;
  }, { page: 1, per_page: 10, total: 0 });
};
