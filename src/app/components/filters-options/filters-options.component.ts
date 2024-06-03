import { Component, output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FilterSelection } from './interfaces/filter-selection.event';

@Component({
  selector: 'app-filters-options',
  standalone: true,
  imports: [ButtonModule, InputTextModule, DropdownModule],
  templateUrl: './filters-options.component.html',
  styleUrl: './filters-options.component.scss'
})
export class FiltersOptionsComponent {

  public filtersSelection = output<FilterSelection>();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      input: [''],
      category: [''],
      branch: [''],
      activity: ['']
    });

    this.searchForm.valueChanges.subscribe(value => {
      this.filtersSelection.emit(value);
    });
  }
   
  public categoryOptions = [
    {label: 'Todos', value: ''},
    {label: 'Magia conectada', value: 'connected'},
    {label: 'Estratégico', value: 'strategic'}
  ]

  public branchOptions = [
    {label: 'Pico', value: 'pico'},
    {label: 'Trenque', value: 'trenque'},
    {label: 'Rancul', value: 'rancul'}
  ]

  public activityOptions = [
    {label: 'Activo', value: 'active'},
    {label: 'Inactivo', value: 'inactive'},
    {label: 'Todos', value: ''}
  ]

}
