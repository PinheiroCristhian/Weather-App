const APICall = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d28ab575aff2437e860aefbb794346e6`, {mode: 'cors'});
        const cityData = response.json();
        return cityData;
    } catch (err) {
        alert(err);
    }
    
}

export default APICall;