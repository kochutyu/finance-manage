import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {MatTab} from "@angular/material/tabs";

@Injectable()
export class DashboardActionService {
  private tabChange$ = new Subject<MatTab>();

  public changeTab(tab: MatTab): void {
    this.tabChange$.next(tab);
  }

  public handleChangeTab$(): Observable<MatTab> {
    return this.tabChange$.asObservable();
  }
}
