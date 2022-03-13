import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { catchError, map } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string = environment.baseUrl;


  constructor(private http: HttpClient) {
  }

  // callJsonGetRestApi(url: string):Observable<any> {
  //
  //
  //   return this.http.get(url)
  //     .pipe(map((data: any) => {
  //         //handle api 200 response code here or you wanted to manipulate to response
  //         return data;
  //
  //       }),
  //       catchError((error) => {    // handle error
  //
  //         if (error.status == 404) {
  //           //Handle Response code here
  //         }
  //         return throwError(error);
  //       })
  //     );
  //
  // }
  // loadItemPerBusinessId(templateName: string, id: number): Observable<ProcessItem> {
  //   return this.http.get<ProcessItem>(`${this.baseUrl}/items/${templateName}/${id}`);
  // }

}
