import "./WHDisplay.scss"
import Timestamp from "../Timestamp/Timestamp";

const WHDisplay = (props) => {

const { weatherHistory } = props

const displayHistory = weatherHistory.map((weather) => {
    return (
        <div className="history" key={weather.id}>
        <div className="elements">
        {weather.id}
        </div>
        <div className="elements">
        {weather.name}
        </div>
        <div className="elements">
        {weather.state}
        </div>
        <div className="elements">
        {weather.country}
        </div>
        <div className="elements">
        {weather.temp}°
        </div>
        <div className="elements">
        {weather.description}
        </div>
        <div className="elements">
        {weather.feelsLike}°
        </div>
        <div className="elements">
        {weather.windSpeed} mph
        </div>
        <div className="elements">
        {weather.humidity}%
        </div>
        <div className="elements">
        <Timestamp timestamp={weather.createdAt}/>
        </div>
        </div>      
        )
})
return (
    <div>
    <section className="column-headings">
    <div className="elements">
        No.
    </div>
    <div className="elements">
        City
    </div>
    <div className="elements">
        State
    </div>
    <div className="elements">
        Country
    </div>
    <div className="elements">
        Temp.
    </div>
    <div className="elements">
        Description
    </div>
    <div className="elements">
        Feels Like
    </div>
    <div className="elements">
        Wind Speed
    </div>
    <div className="elements">
        Humidity
    </div>
    <div className="elements">
        Date/Time
    </div>
    </section>
    <div className="history-block">
    {displayHistory}
    </div>
    </div>
)

}

export default WHDisplay;