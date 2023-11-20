const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
  ];

  function TabularBooks(){
      let data = books.map((book) => <li>{book.title} {book.author} {book.year} </li>);

    return <div> <ul>{data}</ul> </div>
  }

  export default TabularBooks;