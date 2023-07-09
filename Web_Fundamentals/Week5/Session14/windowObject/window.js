//Sample data for session cache
let temperatureData = {
  'New York': 20,
  'London': 18,
  'Paris': 22,
  'Tokyo': 25,
  'Sydney': 28,
};

//Setting session and local caches
sessionStorage.setItem("sessiondata", JSON.stringify(temperatureData));
localStorage.setItem("laptop", "Lenovo");

function displayWindowsProperties (){
  console.log(navigator.userAgent); //OUTPUT: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/0.0.0.0 Safari/537.36 Edg/+++.++.+++.+
  console.log("");
  console.log(`Screen width is: ${screen.width} and screen height is: ${screen.height}`); //OUTPUT: Screen width is: 1366 and screen height is: 768
  console.log("");
  console.log(`This page URL is ${location.href} and this is being accessed from directory ->${location.pathname}`); //OUTPUT: This page URL is http://127.0.0.1:5500/Week5/Session14/windowObject/index.html and this is being accessed from directory ->/Week5/Session14/windowObject/index.html
  console.log("");
  console.log(`This is session storage data => ${sessionStorage.getItem("sessiondata")},
This is local Storage data-> ${localStorage.getItem("laptop")}`); //OUTPUT: This is session storage data => {"New York":20,"London":18,"Paris":22,"Tokyo":25,"Sydney":28},This is local Storage data-> Lenovo
}

displayWindowsProperties ();