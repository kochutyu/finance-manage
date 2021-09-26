import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {from, Observable, of} from "rxjs";
import {finalize, map, switchMap} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly baseUrl: string;

  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private angularFireStorage: AngularFireStorage,
    private authService: AuthService
  ) {
    this.baseUrl = authService.email;
  }

  public add(url: string, data: any): Observable<any> {
    const promise: Promise<any> = this.angularFireDatabase.database.ref(url).set(data);
    return from(promise);
  }

  public update(url: string, data: any): Observable<any> {
    const promise: Promise<any> = this.angularFireDatabase.database.ref(url).set(data);
    return from(promise);
  }

  public get(url: string): Observable<any> {
    const promise: Promise<any> = this.angularFireDatabase.database.ref(url).once('value');
    return from(promise).pipe(
      map(v => v.val())
    );
  }

  public delete(url: string): Observable<any> {
    const promise: Promise<any> = this.angularFireDatabase.database.ref(url).remove();
    return from(promise);
  }

  public get getBaseUrl(): string {
    return this.baseUrl;
  }

  public getDatabase(): AngularFireDatabase {
    return this.angularFireDatabase;
  }

  public uploadFile(file: File): Observable<string> {
    const request = this.angularFireStorage.upload(file.name, file);
    return from(request).pipe(switchMap(response => response.ref.getDownloadURL()));
  }
}
