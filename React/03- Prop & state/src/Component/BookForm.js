import { React, useState } from 'react';


function BookForm(props) {
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [date, setDate] = useState('');

    const handleTitleChange = (e) => { setTitle(e.target.value) }
    const handleAuthorChange = (e) => { setAuthor(e.target.value) }
    const handleDateChange = (e) => { setDate(e.target.value) }
    const handleSubmit = (e) => { 
        e.preventDefault();
        let data = {
            title : title,
            author : author,
            year : new Date(date).getFullYear(),
            description : '',
            genre : ''
        }
        console.log(data )
        props.setBooks((books) => [...books, data])
        console.log("hd  agsaux ah sx k" )
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Title</label>
                <input type='text' value={title} placeholder='Title' onChange={handleTitleChange} />
            </div>

            <div>
                <label htmlFor='author'>Author</label>
                <input type='text' value={author} placeholder='Author' onChange={handleAuthorChange} />
            </div>

            <div>
                <label htmlFor='date'>Date</label>
                <input type='date' value={date} placeholder='Date' onChange={handleDateChange} />
            </div>

            <div>
                <button type='submit'> Submit Form </button>
            </div>

        </form>
    </div>
}

export default BookForm;