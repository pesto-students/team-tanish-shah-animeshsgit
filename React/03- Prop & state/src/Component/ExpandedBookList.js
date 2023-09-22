import EachBook from "./Book";

  function ExpandedBooks(books){
    let data = books.items.map((book) => EachBook(book, books));

    return <div> <ul>{data}</ul> </div>
  }

  export default ExpandedBooks;