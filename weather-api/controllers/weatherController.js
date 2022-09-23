import { Weather } from "../models/weatherModel.js";



export const getWeatherHistory = (req, res) => {
    Weather.findAll()
    .then(weathers => {
        res.status(200).send(weathers)
    })
    .catch(err => {
        console.log(err)
    })
}

export const addWeatherHistory = (req, res) => {
    Weather.create({
        name: req.body.name,
        state: req.body.state,
        country: req.body.country,
        temp: req.body.temp,
        description: req.body.description,
        feelsLike: req.body.feelsLike,
        windSpeed: req.body.windSpeed,
        humidity: req.body.humidity
    })
    .then(() => {
        res.status(201).send({
            message: "Weather logged"
        })
    })
    .catch(err => {
        console.log(err)
    })
}


// This is the initial array I used when I first created the API:
    // const weatherHistory = [
    // {
    //     "id":"1",
    //     "cityName": "Chicago", 
    // }
    // ]

// This was replaced by the DB Models structure for the getWeatherHistory function: 
    // res.status(200).send({
    //     weatherHistory: weatherHistory
    // })

// This was replaced by the DB Models structure for the addWeatherHistory function: 
        // const weather = {
    //     id: req.body.id,
    //     cityName: req.body.cityName
    // }
    // weatherHistory[0] = weather
    // res.status(201).send({
    //     message: "Weather Logged"
    // })