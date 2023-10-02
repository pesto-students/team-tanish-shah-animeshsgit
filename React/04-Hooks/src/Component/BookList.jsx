import EachBook from "./Book";

  function BookList(books){
    let data = books.items.map((book) => <EachBook individualBook={book} allBooks={books} />);
    return <div> <ul>{data}</ul> </div>
  }

  export default BookList;