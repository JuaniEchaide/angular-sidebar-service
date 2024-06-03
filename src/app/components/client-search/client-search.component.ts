import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FiltersOptionsComponent } from '../filters-options/filters-options.component';
import { FilterSelection } from '../filters-options/interfaces/filter-selection.event';

@Component({
  selector: 'app-client-search',
  standalone: true,
  imports: [ButtonModule, InputTextModule, DropdownModule, FiltersOptionsComponent],
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {
  public filters = signal<FilterSelection>({
    branch: '',
    activity: '',
    category: ''
  });

  public inputSearch = signal<string>('');
  ngOnInit(): void {}

  onSearch(): void {
    const formValues = {filters: this.filters(), input: this.inputSearch()};
    console.log('ON SEARCH formValues', formValues);
  }

  onCancelButton(): void {
    console.log('cancel')
  }

  onFiltersSelection(event: FilterSelection): void {
    this.filters.set(event);
  }
}
