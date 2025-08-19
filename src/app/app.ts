import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BookService } from './book.service';
import { Book } from './book.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('BookApp');

  model: Book = { name: '', author: '', year: '', language: '' };
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooksFromServer();
  }

  getBooksFromServer() {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  newBook(form: any) {
    if (form && form.valid) {
      this.bookService.addBook(this.model).subscribe((newBook: Book) => {
        this.books.push(newBook);
        this.model = { name: '', author: '', year: '', language: '' };
        if (typeof form.resetForm === 'function') {
          form.resetForm(this.model);
        }
      });
    }
  }
}