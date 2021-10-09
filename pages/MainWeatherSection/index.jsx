import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'umi';

import config, {defaultCitiesWeather} from '@/config/common';
import WeatherCell from '@/components/WeatherCell';
import styles from './index.css';

// display main weather info section
const MainWeatherSection = (props) => {
  const {
    weather,
    dispatch,
    meta: {navigation}
  } = props
  const {citiesWeather} = weather
  const [showingDetailIndex, setShowingDetailIndex] = useState(-1);
  
  // map the weather cell based on the location data fetched 
  const MapWeatherData = () => (
    citiesWeather.map((item, index)=>{
      const {name, main:{temp}} = item;
      const isShowingDetail = showingDetailIndex===index
      const goDetail = () => {
        console.log('navigation', navigation)
        navigation.navigate('/fullScreenDetailPage')
      }
      return (
        <TouchableOpacity onPress={goDetail} disabled={isShowingDetail}>
          <WeatherCell 
            key={index}
            cityname={name}
            temperature={temp}
          />
        </TouchableOpacity>
      )
    })
  )
  
  return (
    <MapWeatherData />
  )
}


export default connect(({weather, meta}) => ({
  weather,
  meta
}))(MainWeatherSection);