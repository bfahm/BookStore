import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing-module";
import { AuthModule } from "./auth/auth.module";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
    // New components generated from CLI automatically added here
    declarations: [AppComponent, CartComponent],
    imports: [BrowserModule, BooksModule, AppRoutingModule, AuthModule],
    bootstrap: [AppComponent],
})
export class AppModule{}