import React, {useState, useEffect} from 'react';
import {connect} from 'umi';

import config, {defaultCitiesWeather} from '@/config/common';
import WeatherCell from '@/components/WeatherCell';
import styles from './index.css';

// display main weather info section
const MainWeatherSection = (props) => {
  const {
    weather,
    dispatch
  } = props
  const {citiesWeather} = weather
  
  // map the weather cell based on the location data fetched 
  const MapWeatherData = () => (
    citiesWeather.map((item, index)=>{
      const {name, main:{temp}} = item;
      return (
        <WeatherCell 
          key={index}
          cityname={name}
          temperature={temp}
        />
      )
    })
  )
  
  return (
    <MapWeatherData />
  )
}


export default connect(({weather}) => ({
  weather,
}))(MainWeatherSection);