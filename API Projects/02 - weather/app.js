// Init weather object
const weather = new Weather('São Paulo', 'br');

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {

weather.getWeather()
       .then(result => {
         ui.paint(result);
       })
       .catch(err => console.log(err))
}