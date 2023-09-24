import React, {useState} from 'react'
import BookForm from './Component/BookForm';
import ExpandedBooks from "./Component/ExpandedBookList";

function App() {
  const [books, setBooks] = useState( [
    { title: 'Book 1', author: 'Author 1', year: 2020, description: 'Story of a monk', genre: 'Self-Help' },
    { title: 'Book 2', author: 'Author 2', year: 2018, description: 'You can become rich', genre: 'Finance-Management' },
    { title: 'Book 3', author: 'Author 3', year: 2022, description: 'Learn anything easily', genre: 'Productivity' },
  ]);
  return (
    <div>
      {/* {console.log("App.js")} */}
      {/* {console.log(books)} */}
      <BookForm setBooks={setBooks} /> 
      {/* {console.log(books)} */}
      <h1>Assignment second part</h1>
      <ExpandedBooks items={books} setBooks={setBooks}/>
    </div>
  );
}

export default App;
