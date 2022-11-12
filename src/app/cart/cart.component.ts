import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getCart(): Book[]{
    return this.cartService.cart;
  }
}
