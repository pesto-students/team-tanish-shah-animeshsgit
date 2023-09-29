export const url = 'https://hapi-books.p.rapidapi.com/nominees/romance/2020';
export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '427017e870msh584c56f4a45c6a0p1880c5jsnd15fe11fed06',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
};

export const fetchingData = async (url, options) => {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log('result',result);
    return result;
}

// fetchingData(url, options);