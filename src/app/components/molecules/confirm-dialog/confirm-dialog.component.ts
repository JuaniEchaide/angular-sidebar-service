import { Component, signal } from '@angular/core';
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
  public primaryText = signal<string>('');
  public secondaryText = signal<string>('');
  public primaryAction = signal<() => void>(() => { });
  public secondaryAction = signal<() => void>(() => { });

  public options = signal<{ label: string, class: string; action: () => void }[]>([
    { label: this.primaryText(), class: 'primary', action: this.primaryAction() },
    { label: this.secondaryText(), class: 'secondary', action: this.secondaryAction() },
  ])
}
