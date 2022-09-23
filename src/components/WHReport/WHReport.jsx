import { useEffect, useRef } from "react";

const WHReport = (props) => {

const { weatherHist, stateInfo } = props
const effectRan = useRef(false);

useEffect(() => {

if(effectRan.current === false) {
    const postWeatherInfo = async (url = '', data = {}) =>{
        const response = await fetch(url, {
            method: 'POST', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            
    })
        return response.json();
    }
    
    postWeatherInfo("http://localhost:3010/api/weather", {
        "name": weatherHist.name,
        "state": stateInfo.charAt(0).toUpperCase() + stateInfo.slice(1),
        "country": weatherHist.sys.country,
        "temp": Math.trunc(1.8 * (weatherHist.main.temp - 273) + 32),
        "description": weatherHist.weather[0].description.charAt(0).toUpperCase() + weatherHist.weather[0].description.slice(1),
        "feelsLike": Math.trunc(1.8 * (weatherHist.main.feels_like - 273) + 32),
        "windSpeed": Math.trunc(weatherHist.wind.speed),
        "humidity": weatherHist.main.humidity
    })

    return () => {
        effectRan.current = true;
    }
}

});

return

}

export default WHReport;