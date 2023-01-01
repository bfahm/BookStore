import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import { BooksService } from './books.service';
import { CartService } from '../cart/cart.service';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [
    CommonModule
  ],
  providers: [BooksService, CartService],
  exports: [BooksComponent],
})
export class BooksModule { }
