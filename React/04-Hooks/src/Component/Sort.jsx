import React, { useEffect, useState } from 'react'
import useBookSort from '../customHooks/useBookSort'

function Sort({ book, setbook }) {
    const [sortBy, setSortBy] = useState('asc')
    const responseBook = useBookSort(book, sortBy);
    // console.log('response', responseBook);

    useEffect(() => {
        setbook(responseBook);
    }, [sortBy])

    return (
        <div>
            <label htmlFor="sort"> Sort Vote By:</label>
            <select value={sortBy} onChange={(event) => { setSortBy(event.target.value) }}>
                <option value="desc">High to Low</option>
                <option value="asc">Low to High</option>
            </select>
        </div>
    )
}

export default Sort