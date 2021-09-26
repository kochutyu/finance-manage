import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Injector, OnInit} from '@angular/core';
import {BaseControlComponent} from "../base-control.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-percent-select',
  templateUrl: './percent-select.component.html',
  styleUrls: ['./percent-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PercentSelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PercentSelectComponent extends BaseControlComponent implements OnInit {

  percents: number[] = [];

  constructor(
    protected injector: Injector,
    private cdr: ChangeDetectorRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    for (let i = 0; i <= 100; i++) {
      this.percents.push(i);
    }
    this.cdr.markForCheck();
  }

}
