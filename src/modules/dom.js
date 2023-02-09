const DOM = () => {
    const displayCityName = document.querySelector('#cityName');
    const displayCountryName = document.querySelector('#countryName');
    const displayCityTemperature = document.querySelector('#cityTemperature');
    const displayCityHumidity = document.querySelector('#cityHumidity');
    const displayCityWeather = document.querySelector('#cityWeather')
    const searchField = document.querySelector('#searchField');
    const searchButton = document.querySelector('#searchButton');


    return {
        displayCityName,
        displayCityTemperature,
        displayCountryName,
        displayCityHumidity,
        displayCityWeather,
        searchField,
        searchButton
    }
}

export default DOM;