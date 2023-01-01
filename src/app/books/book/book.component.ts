import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() index: number = 0;
  @Input() book: Book = {} as Book;
  @Output() addBookEmitter = new EventEmitter<Book>();
  @Output() removeBookEmitter = new EventEmitter<Book>();

  isInCart = false;

  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.updateIsInCart();
  }

  updateIsInCart(): void {
    this.isInCart = this.cartService.isInCart(this.book);
  }

  onAddToCart() {
    this.isInCart = true;
    this.addBookEmitter.emit(this.book);
  }
  
  onRemoveFromCart() {
    this.isInCart = false;
    this.removeBookEmitter.emit(this.book);
  }

}
