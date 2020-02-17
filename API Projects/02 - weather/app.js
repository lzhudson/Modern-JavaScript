// Init weather object
const weather = new Weather('London', 'uk');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {

weather.getWeather()
       .then(result => {
        
         console.log(result);
       })
       .catch(err => console.log(err))
}