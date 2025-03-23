function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {

        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }
    if (temperature <= 50 && windSpeed > 3) {

        return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
    }
    return "N/A";
}


document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;


const temperature = 5;  
const windSpeed = 6;    


const windchillElement = document.getElementById('windchill');
windchillElement.textContent = `Wind Chill: ${calculateWindChill(temperature, windSpeed)} °C`;


document.getElementById('weather-description').textContent = '⛅';
