import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-client-search',
  standalone: true,
  imports: [ButtonModule, InputTextModule, DropdownModule],
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      input: [''],
      category: [''],
      branch: [''],
      activity: ['']
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

  ngOnInit(): void {}

  onSearch(): void {
    const formValues = this.searchForm.value;
    console.log('ON SEARCH formValues', formValues);
  }

  onCancelButton(): void {
    console.log('cancel')
  }
}
