import React,{useState} from 'react'
import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'

export default function WeatherApp(){
    const [weatherInfo, setweatherInfo] = useState({
       city :" Delhi",
       feelslike : 24.08,
       temp : 25.05,
       tempMin : 25.05,
       tempMax : 25.05,
       humidity : 47,
       weather :" haze",
    })

    let updateInfo = (newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}