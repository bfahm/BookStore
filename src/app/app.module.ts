import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksModule } from "./books/books.module";

@NgModule({
    // New components generated from CLI automatically added here
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, BooksModule],
    bootstrap: [AppComponent],
})
export class AppModule{}