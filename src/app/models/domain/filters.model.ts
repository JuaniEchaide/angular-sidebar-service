
export interface Filter {
    type: string;
    value: string;
}

export interface FilterSearchState<T = any> {
    isOpen: boolean;
    flow: string;
    profile: string;
    filters: Filter[];
    results: T[];
}

export interface Paginated {
    page: number;
    per_page: number;
    total: number;
    [key: string]: any;
}