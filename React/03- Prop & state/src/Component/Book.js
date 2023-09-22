import { useState } from 'react';
import '../index.css'

function EachBook(individualBook, allBooks) {
    const [details, setDetails] = useState(false);

    function handleDelete() {
        allBooks.setBooks((prevBooks) => {
            return prevBooks.filter((prevBooks) => {
                return prevBooks.title !== individualBook.title;
            })
        });
    }

    function handleToggle() {
        return setDetails(!details);
    }

    return <div key={individualBook.title} >
        <h3 className="title" >{individualBook.title}</h3>
        <p>Author: {individualBook.author}</p>
        <p>Year: {individualBook.year}</p>
        {details && <div> <p> Description: {individualBook.description}</p>
            <p>Genre: {individualBook.genre} </p> </div>}
        {console.log(details)}
        <button onClick={handleToggle} >{details ? 'Hide Details' : 'Show Details'}</button>
        <br/>
        <button onClick={handleDelete}>Delete</button>
    </div>
}

export default EachBook;