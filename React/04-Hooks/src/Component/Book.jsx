import '../index.css'

function EachBook({ individualBook, allBooks }) {
    return <div key={individualBook.book_id} >
        <h3 className="title" >{individualBook.name}</h3>
        <p>Author: {individualBook.author}</p>
        <p>Year: {individualBook.votes}</p>
    </div>
}

export default EachBook;