import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  newBookTitle: string = '';
  newBookAuthor: string = '';

  ngOnInit(): void {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
  }
  addBook() {
    if (this.newBookAuthor.trim().length && this.newBookTitle.trim().length) {
      let newbook: Book = {
        title: this.newBookTitle,
        author: this.newBookAuthor,
        id: Date.now(),
      };
      this.books.push(newbook);

      this.newBookAuthor = '';
      this.newBookTitle = '';
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }
  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
