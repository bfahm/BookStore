import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  cart: Book[] = [];

  addToCart(book: Book){
    this.cart.push(book);
    console.log(this.cart.length);
  }

  removeFromCart(book: Book){
    this.cart = this.cart.filter(b => b !== book);
    console.log(this.cart.length);
  }
}
