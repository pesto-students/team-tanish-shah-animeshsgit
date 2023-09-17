import { React, PureComponent } from 'react'
import EachBook from "./BookDetail";
import Withlog from './WithLog';

const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 },
];

class ExpandedBooks extends PureComponent {
  render() {
    let data = books.map((book) => EachBook(book));
    let finalHtml = <div> <ul>{data}</ul> </div>;
    return finalHtml
  }
}

export default Withlog(ExpandedBooks);