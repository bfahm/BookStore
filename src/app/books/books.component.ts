import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name: string = "Clean Code";
  author: string = "Robert C Martin";
  src: string = "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg";

  name2: string = "The Pragmatic Programmer";
  author2: string = "Andy Hunt";
  src2: string = "https://m.media-amazon.com/images/I/41HXiIojloL._AC_UY327_FMwebp_QL65_.jpg";

  isBookShown: boolean = true;
  
  currentText1: string = '';
  currentText2: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onToggleBooks(){
    this.isBookShown = !this.isBookShown;
  }

  onInput(event: any){
    this.currentText1 = event.target.value;
  }
}
