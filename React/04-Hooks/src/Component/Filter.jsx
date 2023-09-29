import React, { useEffect, useState } from 'react'
import useBookFilter from '../customHooks/useBookFilter';

function Filter({ book, setbook }) {
    const [filterBy, setFilterBy] = useState('');

    const responseBook = useBookFilter(book, filterBy);
    
    useEffect(() => {
        setbook(responseBook);
    }, [filterBy]);

    return (
        <div>
            <label htmlFor="filter">Filter By:</label>
            <input type="text" value={filterBy} onChange={(event) => setFilterBy(event.target.value)} />
        </div>
    )
}

export default Filter