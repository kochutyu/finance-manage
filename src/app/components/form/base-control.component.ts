import {Component, Injector, Input, ViewChild} from "@angular/core";
import {ControlContainer, ControlValueAccessor, FormControl, FormControlDirective} from "@angular/forms";

@Component({
  template: '',
  /*** Example provide form control */
  // providers: [
  // 	{
  // 		provide: NG_VALUE_ACCESSOR,
  // 		useExisting: forwardRef(() => Control), // replace name as appropriate
  // 		multi: true,
  // 	},
  // ],
})
export abstract class BaseControlComponent implements ControlValueAccessor {
  @ViewChild(FormControlDirective, {static: true})
    // @ts-ignore
  formControlDirective: FormControlDirective;

  @Input()
    // @ts-ignore
  formControl: FormControl;

  @Input()
    // @ts-ignore
  formControlName: string;

  protected constructor(protected injector: Injector) {
  }

  get control() {
    // @ts-ignore
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    if (!this.formControlDirective) {
      return;
    }
    // @ts-ignore
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    if (!this.formControlDirective) {
      return;
    }
    // @ts-ignore
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    if (!this.formControlDirective) {
      return;
    }
    // @ts-ignore
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    if (!this.formControlDirective) {
      return;
    }
    // @ts-ignore
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}
