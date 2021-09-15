import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private db: AngularFireDatabase
  ) {
  }

  public add(url: string, data: any): Observable<any> {
    const promise: Promise<any> = this.db.database.ref(url).set(data);
    return from(promise);
  }

  public update(url: string, data: any): Observable<any> {
    const promise: Promise<any> = this.db.database.ref(url).set(data);
    return from(promise);
  }

  public get(url: string): Observable<any> {
    const promise: Promise<any> = this.db.database.ref(url).once('value');
    return from(promise).pipe(
      map(v => v.val())
    );
  }

  public delete(url: string): Observable<any> {
    const promise: Promise<any> = this.db.database.ref(url).remove();
    return from(promise);
  }
}
