import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Book[]{
    return [
      {
        name: "Clean Code",
        author: "Robert C Martin",
        image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        price: 120
      },
      {
        name: "The Pragmatic Programmer",
        author: "Andy Hunt",
        image: "https://m.media-amazon.com/images/I/41HXiIojloL._AC_UY327_FMwebp_QL65_.jpg",
        price: 300
      },
      {
        name: "Python Programming for Beginners",
        author: "Cory Reed",
        image: "https://m.media-amazon.com/images/P/B0BFV21L24.01._SCLZZZZZZZ_SX500_.jpg",
        price: 250
      },
      {
        name: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        image: "https://m.media-amazon.com/images/P/1491952024.01._SCLZZZZZZZ_SX500_.jpg",
        price: 165
      },
    ];
  }
}
