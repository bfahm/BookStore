import { Component, OnInit } from '@angular/core';

interface Book{
  name: string,
  author: string,
  image: string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: "Clean Code",
      author: "Robert C Martin",
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
    },
    {
      name: "The Pragmatic Programmer",
      author: "Andy Hunt",
      image: "https://m.media-amazon.com/images/I/41HXiIojloL._AC_UY327_FMwebp_QL65_.jpg",
    },
  ]

  isBookShown: boolean = true;
  
  currentText1: string = '';
  currentText2: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: any){
    this.currentText1 = event.target.value;
  }
}
