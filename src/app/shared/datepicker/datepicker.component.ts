import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup,NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormatSettings } from '@progress/kendo-angular-dateinputs';
@Component({
  selector: 'range-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DatepickerComponent),
    },
  ]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor{
  
  @Input() min!:Date;
  @Input() max!:Date;
  value: any;
  public format: FormatSettings = {
    displayFormat: "dd/MM/yyyy",
    inputFormat: "dd/MM/yyyy",
  };
  onChange: any = () => { }
  onTouch: any = () => { }
  touched = false
  disabled = false

  ngOnInit() {
  }

  changes(event: Date) {
    if (this.disabled) return
    this.markAsTouched()
    this.value = event ;
    this.onChange(this.value)
  }

  registerOnChange(providedFunction: any) {
    this.onChange = providedFunction
  }

  registerOnTouched(providedFunction: any) {
    this.onTouch = providedFunction
  }

  writeValue(providedValue: any) {
    this.value = providedValue
  }

  setDisabledState(providedDisabledVal: any) {
    this.disabled = providedDisabledVal
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouch()
      this.touched = true
    }
  }
}
