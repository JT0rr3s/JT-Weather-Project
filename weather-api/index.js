import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import router from './routes/weather.js';
import { sequelize } from "./db/index.js";

const app = express();
const port = process.env.PORT || 3010;

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})

sequelize.sync()
.then((result => {
    console.log(result)
}))
.catch(err => {
    console.log(err)
})

app.use(bodyParser.json());

app.use(cors(
    {origin: "*"}
));

app.use("/api/weather", router);
app.get("/api", (req, res) => {
    res.send("Welcome to my API!")
});



