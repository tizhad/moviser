import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  loadedPosts = [];
  constructor(private http: HttpClient) { }

  onCreateBook(postData: {title: string, content: string}){
    this.http.post('https://moviser-344013-default-rtdb.europe-west1.firebasedatabase.app/books.json', postData).subscribe((responseData) => {
      console.log(responseData)
    })

  }

  onFetchBooks(){
    this.fetchBooks()
  }

  onClearBooks(){

  }

  private fetchBooks(){
    this.http.get('https://moviser-344013-default-rtdb.europe-west1.firebasedatabase.app/books.json').subscribe((books) => {
      console.log(books)
    })
  }

  ngOnInit() {
  }

}
