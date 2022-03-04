const express = require('express')
const { rmSync } = require('fs')
const app = express()
const port = 3000
const https = require('https')


app.get('/', (req, res)=>{
    
    
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=San%20Diego,CA,US&appid=3f89453aa081ebfa7cc465cd782578b1'
    https.get(url,(resp)=>{

        resp.on('data', (data)=>{

            const weatherData = JSON.parse(data)
            const location = weatherData.name
            const weatherId = weatherData.weather.id
            const iconId = weatherData.weather[0].icon
            const iconUrl =  'https://openweathermap.org/img/wn/'+ iconId +'@2x.png'
            
            res.setHeader('Content-Type', 'text/html')
            res.write('The location is ' + location )
            res.write("<img src='" + iconUrl+ "'/>")
            res.send()
            
        })
       
            
    })
   
    
})


app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})