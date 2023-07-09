async function getExchangeRate(currencyCode) {

    const response = await fetch('https://api.exchangerate.host/latest');
    const json = await response.json();

    let result = (json.rates[currencyCode]);

    if (result == undefined) {
        return null;
    }
    else
        return result.toFixed(4)

}

//Test case 1 with valid currency
getExchangeRate('AED')
    .then((rate) => {
        console.log(rate); //OUTPUT: 4.0145
    })
    .catch((error) => {
        console.error("Error found" + error);
    });

//Test case 2 with In-valid currency
getExchangeRate('UFO')
    .then((rate) => {
        console.log(rate); //OUTPUT: null
    })
    .catch((error) => {
        console.error("Error found" + error);
    });