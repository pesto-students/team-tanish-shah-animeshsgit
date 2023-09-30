import React, { useState, useContext } from 'react'
import BookList from "./Component/BookList";
import BookDataLoader from './Component/BookDataLoader';
import { dummyData } from './Utilities/dummyData';
import Filter from './Component/Filter';
import Sort from './Component/Sort';
import { ThemeProvider, ThemeContext } from "./Component/ThemeSwitcher";

function App() {
  const [books, setBooks] = useState([...dummyData]);
  const { theme } = useContext(ThemeContext);

  const setbookHandler = (setbook) => {
    setBooks(setbook)
  };


  return (
    <div>
      <ThemeProvider>
        <Filter book={books} setbook={setbookHandler} />
        <Sort book={books} setbook={setbookHandler} />
        <BookDataLoader book={books} setbook={setbookHandler} />
        <h1>Book List</h1>
        <BookList items={books} />
        {console.log(theme)}
      </ThemeProvider>
    </div>
  );
}

export default App;
