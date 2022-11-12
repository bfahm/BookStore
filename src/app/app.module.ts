import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing-module";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
    // New components generated from CLI automatically added here
    declarations: [AppComponent, CartComponent],
    imports: [BrowserModule, FormsModule, BooksModule, AppRoutingModule],
    bootstrap: [AppComponent],
})
export class AppModule{}