import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'

export default function InfoBox({info}){
    // let INIT_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://media.istockphoto.com/id/984020220/photo/barren-land.jpg?s=1024x1024&w=is&k=20&c=X6VID5DIy55LDhJZMnPWmGEQ3XIcjE8Fy1q__7Cevy4=";
    let COLD_URL = "https://images.unsplash.com/photo-1677256691517-36d1f6120297?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU=";

    return(
        <div className="infoBox">
            <div className="cardContainer">
               <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                  sx={{ height: 140 }}
                  image={info.humidity > 80 ? 
                    RAIN_URL :
                    info.temp > 15 ?
                     HOT_URL : 
                     COLD_URL}
                  title="green iguana"
              />
               <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 {info.city}{
                    info.humidity > 80 ? 
                    <ThunderstormIcon/> :
                    info.temp > 15 ?
                    <WbSunnyIcon/> : 
                    <AcUnitIcon/>}
               </Typography>
               <Typography variant="body2" color='text.secondary' component={"span"} >
                 <div>Temperature = {info.temp}&deg;C</div>
                 <div>Humidity = {info.humidity}</div>
                 <div>Max Temperature = {info.tempMax}&deg;C</div>
                 <div>Min Temperature = {info.tempMin}&deg;C</div>
                 <div>The weather can be described as {info.weather} & feels Like = {info.feelslike}&deg;C</div>
                </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}