const express = require('express')
const { rmSync } = require('fs')
const app = express()
const port = 3000
const https = require('https')
const bodyParser = require ('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    
    res.sendFile(__dirname + '/index.html')
    });

app.post('/', (req, res)=>{

    const locationQ = req.body.location
    const key = '3f89453aa081ebfa7cc465cd782578b1'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ locationQ + '&appid=' + key
   
    
    https.get(url,(response)=>{
        console.log(response.statusCode)

        response.on('data', data=>{
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            res.write('<h1> The weather is ' + temp + ' degrees kelvin</h1>')

        })
    })

});

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
});


//api
