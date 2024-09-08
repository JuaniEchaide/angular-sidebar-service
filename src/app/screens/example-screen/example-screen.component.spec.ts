import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleScreenComponent } from './example-screen.component';

describe('ExampleScreenComponent', () => {
  let component: ExampleScreenComponent;
  let fixture: ComponentFixture<ExampleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
