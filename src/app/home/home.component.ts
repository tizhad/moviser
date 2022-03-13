import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Book} from "../store/models/book.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  loadItemPerBusinessId() {
    const result = this.http.get<Book>(`${this.baseUrl}`);
    console.log(result)
    return result;
    // return this.http.get<Book>(`${this.baseUrl}/items/${templateName}/${id}`);
  }

  // getBook():Observable<any> {
  //   console.log("called")
  //
  //   return this.http.get(url)
  //     .pipe(map((data: any) => {
  //         //handle api 200 response code here or you wanted to manipulate to response
  //         console.log(data)
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

  ngOnInit(): void {
  }

}
