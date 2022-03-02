const express = require('express')
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
            const icon ;
            console.log(location)
            res.write('The location is ' + location)
            res.send()
            
        })

    })
   
    
})


app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})