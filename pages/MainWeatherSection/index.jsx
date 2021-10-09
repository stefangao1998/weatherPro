import React, {useState} from 'react';

import WeatherCell from '@/components/WeatherCell';
import styles from './index.css';

// display main weather info section
const MainWeatherSection = () => {
  const [weatherData, setWeatherData] = useState(defaultLocation)
  
  // map the weather cell based on the location data fetched 
  const MapWeatherData = () => (
    weatherData.map((item, index)=>{
      const {cityname, temperature} = item;
      return (
        <WeatherCell 
          key={index}
          cityname={cityname}
          temperature={temperature}
        />
      )
    })
  )
  
  return (
    <MapWeatherData />
  )
}

// initial default location
const defaultLocation = [
  {
    cityname: 'Sydney',
    temperature: 23.12
  },
  {
    cityname: 'Melbourne',
    temperature: 20
  },
  {
    cityname: 'Brisbane',
    temperature: 30
  },
]

export default MainWeatherSection;