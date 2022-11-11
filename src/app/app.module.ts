import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';

@NgModule({
    // New components generated from CLI automatically added here
    declarations: [AppComponent, BooksComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
})
export class AppModule{}