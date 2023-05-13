/* const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const query = "req.body.cityName";
    const apiKey = "5270778e3d997728e4a5a9eabfff8d24";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=5270778e3d997728e4a5a9eabfff8d24&units=metric"
    
    https.get(url, function(response){
    console.log(response.statusCode);
   
    response.on("data", function(data){
 
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
       const weatherDescription = weatherData.weather[0].description;
       const icon = weatherData.weather[0].icon;
       const imageURL= "https://openweathermap.org/img/wn/" + icon + "@2x.png";
       res.write("<p>The weather is currently" + weatherDescription + "</p>");
       res.write("<h1>The temperature in Berlin is " + temp + "degrees Celcius.</h1>");
    res.write("<img src=" + imageURL + ">");
       res.send()
    }); 



    }) ;

}); 

app.listen(3001, function(){
    console.log("Server is up and running on port 3001");
}) */

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true})); //passing throung the body request

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apikey = "5270778e3d997728e4a5a9eabfff8d24"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=5270778e3d997728e4a5a9eabfff8d24&units=metric"

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The temperature in " + query +  " is "  + temp + " degree Celcius.</h1>");
            res.write("<img src='http://openweathermap.org/img/w/" + icon + ".png'>");
            res.send();
        });
    });

})



app.listen(3001, function() {
    console.log("SERVER IS RUNNING ON PORT 3001");
});