import { Inject, Injectable, signal } from '@angular/core';

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

interface Paginated {
  page: number;
  per_page: number;
  total: number;
  [key: string]: any;
}

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

export function createFilterStore<T, Q extends Paginated = Paginated>(mapper: (filters: Filter[]) => Q): FilterSearchStore<T, Q> {
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

const machineFilterStore = createFilterStore<Machine, MachineParams>(mapper);

const queryParams = machineFilterStore.mapFiltersToQueryParam();
console.log(queryParams);
