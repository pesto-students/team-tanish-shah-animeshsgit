import React, { useState } from 'react'
import BookList from "./Component/BookList";
import BookDataLoader from './Component/BookDataLoader';
import { dummyData } from './Utilities/dummyData';
import Filter from './Component/Filter';
import Sort from './Component/Sort';
import {useTheme, ThemeSwitcher } from './Component/ThemeSwitcher';

function App() {
  const [books, setBooks] = useState([...dummyData]);
  // const { theme, toggleTheme } = useTheme();

  const setbookHandler = (setbook) => {
    setBooks(setbook)
  };


  return (
    <div>
      <ThemeSwitcher>
      {/* <button onClick={toggleTheme}>Change to {theme? 'DARK' : 'LIGHT'} </button> */}
        <Filter book={books} setbook={setbookHandler} />
        <Sort book={books} setbook={setbookHandler} />
        <BookDataLoader book={books} setbook={setbookHandler} />
        <h1>Book List</h1>
        {console.log('book->', books)}
        <BookList items={books} />
      </ThemeSwitcher>
    </div>
  );
}

export default App;
