import { useEffect, useState } from 'react';
import { fetchingData, url, options } from './fetchingBook';

function BookDataLoader({ book, setbook }) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getBook = async () => {
            setIsLoading(true);
            const fetchedData = [];
            // fetchedData = await fetchingData(url, options);
            setIsLoading(false);
            setbook((book) => {return [...book] });
        }

        getBook();
    }, []);

    return <div>
        <h2>{isLoading ? 'Loading...' : null}</h2>
    </div>
}

export default BookDataLoader;