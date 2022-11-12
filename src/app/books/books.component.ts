import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { CartService } from '../cart/cart.service';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService, private cartService: CartService) { }

  books: Book[] = []

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  onAddToCart(event:Book) {
    this.cartService.addToCart(event);
  }

  onRemoveFromCart(event:Book) {
    this.cartService.removeFromCart(event);
  }
}
