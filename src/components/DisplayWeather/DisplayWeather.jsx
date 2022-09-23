import "./DisplayWeather.scss";
import Temperature from "../Temperature/Temperature";

const DisplayWeather = (props) => {

const { currentWeather, state } = props

    return (
        <div className="info-box" key={currentWeather.id}>
            <h3>Current Weather for {currentWeather.name}, {state.charAt(0).toUpperCase() + state.slice(1)}:</h3>
            <Temperature tempInfo={currentWeather}/>
            <p className="temp-desc">{currentWeather.weather[0].description.charAt(0).toUpperCase() + currentWeather.weather[0].description.slice(1)}</p>
            <div className="feel-wind">
                <div>Feels Like: {Math.trunc(1.8 * (currentWeather.main.feels_like - 273) + 32)}°</div>
                <div>Wind: {Math.trunc(currentWeather.wind.speed)} mph</div>
            </div>
            <p>Humidity: {currentWeather.main.humidity}%</p>
        </div>

    )
}

export default DisplayWeather;