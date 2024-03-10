const dotenv = require('dotenv');
const axios = require('axios');
const express = require('express');
const app = express();

dotenv.config();

app.use(express.json());

const api = `http://api.openweathermap.org/data/2.5/weather?q=toronto,canada&APPID=${process.env.OPEN_WEATHER_API_KEY}`;

app.get('/', (req, res) => {
    res.send('go to /weather to see weather')
});

app.get('/weather', (req, res) => {
    axios.get(api)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on port ${port} and API key = ${process.env.OPEN_WEATHER_API_KEY}`);
})