import '../index.css'

function EachBook(prop) {
return <div>
    <h3 class="title" >{prop.title}</h3>
    <p>Author: {prop.author}</p>
    <p>Year: {prop.year}</p>
</div>
}

export default EachBook;