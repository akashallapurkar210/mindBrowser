import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Manger } from './manger';

@Injectable({
  providedIn: 'root'
})
export class GetMangerService {

  constructor(private http: HttpClient) { }

  public _subject = new BehaviorSubject<any>('');
    // Handle API errors
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };

  getMangerList():Observable<Manger[]>{
    return this.http.get<Manger[]>("http://localhost:3002/mangerList");
  }

  addManger(manger:Manger){
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(manger);
    return this.http.post("http://localhost:3002/mangerList",body,{'headers':headers}).pipe(
      retry(2),
      catchError(this.handleError)
      );
  }

  emit<T>(data:T){
    this._subject.next(data);
  }
  
  on<T>():Observable<T>{
    return this._subject.asObservable();
  }
}
