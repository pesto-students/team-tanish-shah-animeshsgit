// Acts like an API
const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};

function getTemperatureForCity() {
    const cache = {};  //Acts like a session cache
  
    return function (city) {
      if (cache[city]) {
        console.log(`Retrieved temperature for ${city} from cache.`);
        return cache[city];
      }
  
      console.log(`Fetching temperature for ${city}...`);
      const temperature = temperatureData[city]; //This line acts as an API call to fetch temperature for the city
      cache[city] = temperature;
      return temperature;
    };
  }

  const getTemperature = getTemperatureForCity();

  console.log(getTemperature("New York"));  // 20
  console.log(getTemperature("New York"));  // 20 (retrieved from cache)
  console.log(getTemperature("London"));    // 18
  console.log(getTemperature("London"));    // 18 (retrieved from cache)