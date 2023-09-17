import '../index.css'

function EachBook(prop) {
    return <div key={prop.title}>
        <h3 className="title" >{prop.title}</h3>
        <p>Author: {prop.author}</p>
        <p>Year: {prop.year}</p>
    </div>
}

export default EachBook;