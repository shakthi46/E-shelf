import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ListBooksComponent} from "./books/component/list-books/list-books.component";
import {AddBooksComponent} from "./books/component/add-books/add-books.component";
import {BookDetailsComponent} from "./books/component/book-details/book-details.component";
import { UpdateBookComponent } from './books/component/update-book/update-book.component';


export const routes: Routes = [
  {path: '', component: HomeComponent, title: "E-Library"},
  {path: 'about', component: AboutComponent, title: "About"},
  {path: 'books', children: [
      {path: '', component: ListBooksComponent, title: "Books List"},
      {path:'add', component: AddBooksComponent, title: "Add Book"},
      {path: ':id', component: BookDetailsComponent, title: "Book Details"},
      {path: ':id/edit', component: UpdateBookComponent, title: "Update Book"}
    ]}
];
