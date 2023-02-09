import display from "./modules/display";
import DOM from "./modules/dom";
import APICall from "./modules/APICall";

(function () {
    const button = DOM().searchButton;
    const cityName = DOM().searchField;

    button.addEventListener('click', async () => {    
        if (!cityName.value || cityName.value[0] === ' ') return null;
        
        const cityData = await APICall(cityName.value);
        display(cityData.name, cityData.sys.country, cityData.main.temp, cityData.main.humidity, cityData.weather[0].description);
        
    })
})();
