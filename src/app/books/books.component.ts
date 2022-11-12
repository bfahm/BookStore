import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) { }

  books: Book[] = []
  cart: Book[] = [];

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  onAddToCart(event:Book) {
    this.cart.push(event);
    console.log(this.cart.length);
  }
}
