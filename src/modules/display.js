import DOM from "./dom";

const display = (name, country, temperature, humidity, weather) => {
    const displayCityName = DOM().displayCityName;
    const displayCountryName = DOM().displayCountryName;
    const displayCityTemperature = DOM().displayCityTemperature;
    const displayCityHumidity = DOM().displayCityHumidity;
    const displayCityWeather = DOM().displayCityWeather;

    displayCityName.innerText = `City: ${name}`;
    displayCountryName.innerText = `Country: ${country}`;
    displayCityTemperature.innerText = `Temperature: ${(Number(temperature) - 272.15).toFixed()} °C`; //Convert Kelvin to Celsius
    displayCityHumidity.innerText = `Humidity: ${humidity}%`
    displayCityWeather.innerText = `Today: ${weather}`;

};

export default display;