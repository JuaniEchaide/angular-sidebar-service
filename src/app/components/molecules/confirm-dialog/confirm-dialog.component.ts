import { Component, computed, signal } from '@angular/core';
import { BaseBtnComponent } from "../../atoms/base-btn/base-btn.component";

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [BaseBtnComponent],
  template: `<p>
    @for(option of options();track $index){
        <app-base-btn 
          label="{{option.label}}" 
          btnClass="{{option.class}}" 
          (onClick)="option.action()"/>
    },
</p>`,
 styles: [``]
})
export class ConfirmDialogComponent {
  public primaryText = signal<string>('Accept');
  public secondaryText = signal<string>('Cancel');
  public primaryAction = signal<() => void>(() => { console.log('Primary Action'); });
  public secondaryAction = signal<() => void>(() => { console.log('Secondary Action'); });

  public options = computed(() => [
    { label: this.primaryText(), class: 'primary', action: this.primaryAction() },
    { label: this.secondaryText(), class: 'secondary', action: this.secondaryAction() },
  ]);

  trackByIndex(index: number) {
    return index;
  }
}
