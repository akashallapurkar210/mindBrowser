import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../employee';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetEmpDataService {

  constructor(private http:HttpClient) { }

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

  getEmployeeDate():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:3002/employeeList").pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  addEmployee(emp:Employee):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(emp);
    return this.http.post("http://localhost:3002/employeeList",body,{'headers':headers}).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  updateEmployee(id,emp:Employee):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(emp);
    return this.http.put("http://localhost:3002/employeeList/"+id,body, {'headers':headers}).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteEmployee(id):Observable<any>{
    const headers = {'content-type': 'application/json'}
    return this.http
    .delete("http://localhost:3002/employeeList/"+id, {'headers':headers})
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  emit<T>(data:T){
    this._subject.next(data);
  }
  
  on<T>():Observable<T>{
    return this._subject.asObservable();
  }

}
