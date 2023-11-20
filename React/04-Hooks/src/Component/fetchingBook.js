export const url = 'https://hapi-books.p.rapidapi.com/nominees/romance/2020';
export const options = {
    method: 'GET',
    headers: {

    }
};

export const fetchingData = async (url, options) => {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log('result',result);
    return result;
}

// fetchingData(url, options);