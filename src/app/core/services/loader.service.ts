import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {distinctUntilChanged, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading$ = new BehaviorSubject<boolean>(false);

  public show(): void {
    console.log(123)
    this.loading$.next(true);
  }

  public hide(): void {
    this.loading$.next(false);
  }

  public detect$(): Observable<boolean> {
    return this.loading$.asObservable().pipe(
      distinctUntilChanged()
    );
  }
}
