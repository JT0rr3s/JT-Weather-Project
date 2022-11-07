import './App.scss';
import DisplayWeather from "./components/DisplayWeather/DisplayWeather";
import WHReport from "./components/WHReport/WHReport";
import WHDisplay from "./components/WHDisplay/WHDisplay";
import { useState } from "react";


const App = () => {

const [weatherData, setWeatherData] = useState("");

const getWeatherData = (inputOne, inputTwo, inputThree) => {

const apiKey = "YOURAPIKEY"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputOne},${inputTwo},${inputThree}&appid=${apiKey}`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    setWeatherData(data);
  })
}

const [inputOne, setInputOne] = useState("");

const handleChangeOne = (e) => {
  setInputOne(e.target.value);
}

const [inputTwo, setInputTwo] = useState("");

const handleChangeTwo = (e) => {
  setInputTwo(e.target.value)

}

const [inputThree, setInputThree] = useState("");

const handleChangeThree = (e) => {
  setInputThree(e.target.value);
}

const [history, setHistory] = useState("");

const getWeatherHistory = () => {
  fetch(`http://localhost:3010/api/weather`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setHistory(data);
    })

}

const handleOnClick = () => {
    getWeatherData(inputOne, inputTwo, inputThree);
    getWeatherHistory();
    setWeatherData(""); 
}

return (
  <form className="form">
    <h1>Weather App</h1> 
    <br/>
    <div>
    Please provide the City:
    <br/>
    <br/>
    <input className="input-one" type="text" onChange={handleChangeOne}/>
    </div> 
    <br/>
    <br/>
    <div>
    Please provide the State:
    <br/>
    <br/>
    <input className="input-two" type="text" onChange={handleChangeTwo}/>
    </div> 
    <br/>
    <br/>
    <div>
    Please provide the Country:
    <br/>
    <br/>
    <input className="input-three" type="text" onChange={handleChangeThree} />
    </div>
    <br/>
    <br/>
    <div>
    <button className="submit-button" type="button" onClick={handleOnClick}>Submit</button> 
    </div>
    <br/>
    <br/>
    <div>
    {weatherData && <DisplayWeather currentWeather={weatherData} state={inputTwo}/>}
    {weatherData && <WHReport weatherHist={weatherData} stateInfo={inputTwo}/>}
    </div>
    <br/>
    <br/>
    <h3>Weather Search History</h3>
    <div>
    {history && <WHDisplay weatherHistory={history}/>}
    </div>
  </form>
);
}

export default App;
//
